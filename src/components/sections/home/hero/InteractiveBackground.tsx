'use client';
import React, { useEffect, useRef, useState } from 'react';

interface InteractiveHeroBackgroundProps {
  holdTime?: number;     // ms que permanece transparente al hover
  cellSize?: number;     // px tamaño aproximado de cada cuadro
  introDuration?: number;// ms que cada cuadro queda transparente en la animación inicial
  introSpread?: number;  // ms que tarda la onda en llegar del centro a la esquina
}

const InteractiveHeroBackground: React.FC<InteractiveHeroBackgroundProps> = ({
  holdTime = 2000,
  cellSize = 40,
  introDuration = 4000,
  introSpread = 900,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [rows, setRows] = useState<number>(10);
  const [columns, setColumns] = useState<number>(20);
  const [hovered, setHovered] = useState<boolean[][]>(() => Array.from({ length: 10 }, () => Array(20).fill(false)));

  // timeouts que mantienen las celdas encendidas
  const timersRef = useRef<Map<string, number>>(new Map());
  // timeouts usados para programar la animación inicial (para poder limpiarlos)
  const scheduledRef = useRef<number[]>([]);
  // rAF throttle para pointermove
  const rafRef = useRef<number | null>(null);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);

  // función que enciende (hace transparente) una celda y programa su apagado
  const lightCell = (row: number, col: number, duration = holdTime) => {
    if (row < 0 || col < 0 || row >= rows || col >= columns) return;
    const key = `${row}-${col}`;

    setHovered(prev => {
      // copy-on-write
      const copy = prev.map(r => [...r]);
      if (!copy[row]) return prev;
      copy[row][col] = true;
      return copy;
    });

    // resetear timeout si existe
    if (timersRef.current.has(key)) {
      clearTimeout(timersRef.current.get(key)!);
    }

    const id = window.setTimeout(() => {
      setHovered(prev => {
        const copy = prev.map(r => [...r]);
        if (copy[row]) copy[row][col] = false;
        return copy;
      });
      timersRef.current.delete(key);
    }, duration);

    timersRef.current.set(key, id);
  };

  // recalcular filas/columnas según tamaño del contenedor (cellSize define tamaño aproximado)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateGrid = () => {
      const rect = el.getBoundingClientRect();
      const newColumns = Math.max(1, Math.floor(rect.width / cellSize));
      const newRows = Math.max(1, Math.floor(rect.height / cellSize));
      setColumns(prev => (prev === newColumns ? prev : newColumns));
      setRows(prev => (prev === newRows ? prev : newRows));
      setHovered(Array.from({ length: newRows }, () => Array(newColumns).fill(false)));

      // limpiar timers previos (evitar timeouts colgando entre cambios de tamaño)
      timersRef.current.forEach(t => clearTimeout(t));
      timersRef.current.clear();
    };

    updateGrid();
    const ro = new ResizeObserver(updateGrid);
    ro.observe(el);

    return () => ro.disconnect();
  }, [cellSize]);

  // pointermove global con throttle por rAF
  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      lastPointer.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect || !lastPointer.current) return;
        const x = lastPointer.current.x - rect.left;
        const y = lastPointer.current.y - rect.top;
        if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

        const col = Math.min(columns - 1, Math.max(0, Math.floor((x / rect.width) * columns)));
        const row = Math.min(rows - 1, Math.max(0, Math.floor((y / rect.height) * rows)));
        lightCell(row, col);
      });
    };

    document.addEventListener('pointermove', handlePointer, { passive: true });
    return () => {
      document.removeEventListener('pointermove', handlePointer);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [rows, columns, holdTime]);

  // animación inicial: onda radial desde el centro
  useEffect(() => {
    // limpiar scheduled previos
    scheduledRef.current.forEach(s => clearTimeout(s));
    scheduledRef.current.length = 0;
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current.clear();

    if (rows === 0 || columns === 0) return;

    const centerRow = (rows - 1) / 2;
    const centerCol = (columns - 1) / 2;

    // calcular distancia máxima para normalizar delays
    let maxDist = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const d = Math.hypot(r - centerRow, c - centerCol);
        if (d > maxDist) maxDist = d;
      }
    }

    // programar cada celda según su distancia relativa al centro
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const dist = Math.hypot(r - centerRow, c - centerCol);
        const delay = maxDist === 0 ? 0 : Math.round((dist / maxDist) * introSpread);

        const sid = window.setTimeout(() => {
          // la animación inicial hace que la celda quede transparente por introDuration ms
          lightCell(r, c, introDuration);
        }, delay);

        scheduledRef.current.push(sid);
      }
    }

    // cleanup parcial si cambian rows/columns
    return () => {
      scheduledRef.current.forEach(s => clearTimeout(s));
      scheduledRef.current.length = 0;
      timersRef.current.forEach(t => clearTimeout(t));
      timersRef.current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, columns, introDuration, introSpread]); // cellSize cambia rows/columns y provocará re-run

  // limpiar todo al desmontar
  useEffect(() => {
    return () => {
      scheduledRef.current.forEach(s => clearTimeout(s));
      timersRef.current.forEach(t => clearTimeout(t));
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      scheduledRef.current.length = 0;
      timersRef.current.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      /* IMPORTANTE: NO poner bg-black aquí: las celdas transparentes deben mostrar la imagen debajo */
      className="absolute inset-0 grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        zIndex: 0,
      }}
      aria-hidden
    >
      {Array.from({ length: rows * columns }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const isOn = !!hovered[row]?.[col];

        return (
          <div
            key={index}
            className="w-full h-full transition-opacity duration-700 border border-neutral-900/60 box-border"
            style={{
              // usamos opacity para mostrar la imagen debajo (0 => transparente),
              // y background negro como estado por defecto (1 => cubre la imagen)
              backgroundColor: 'black',
              opacity: isOn ? 0 : 1,
              willChange: 'opacity',
              WebkitTransform: 'translateZ(0)', // pequeño hack para mejorar render
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveHeroBackground;
