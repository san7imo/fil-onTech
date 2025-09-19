'use client';
import React, { useEffect, useRef, useState } from 'react';

interface InteractiveHeroBackgroundProps {
  rows?: number;
  columns?: number;
  holdTime?: number; // ms
}

const InteractiveHeroBackground: React.FC<InteractiveHeroBackgroundProps> = ({
  rows = 10,
  columns = 20,
  holdTime = 500,
}) => {
  const startColor = [0, 128, 0];   // verde
  const endColor = [210, 180, 140]; // tan

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  const timersRef = useRef<Map<string, number>>(new Map());

  const [hovered, setHovered] = useState<boolean[][]>(
    Array.from({ length: rows }, () => Array(columns).fill(false))
  );

  const getColorForColumn = (col: number) => {
    const ratio = columns > 1 ? col / (columns - 1) : 0;
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const lightCell = (row: number, col: number) => {
    const key = `${row}-${col}`;

    setHovered(prev => {
      // if already true, return same object to avoid rerender churn
      if (prev[row][col]) return prev;
      const copy = prev.map(r => [...r]);
      copy[row][col] = true;
      return copy;
    });

    // si ya hay timeout para esa celda, lo limpiamos para reiniciar el holdTime
    if (timersRef.current.has(key)) {
      const id = timersRef.current.get(key)!;
      window.clearTimeout(id);
    }

    const to = window.setTimeout(() => {
      setHovered(prev => {
        const copy = prev.map(r => [...r]);
        copy[row][col] = false;
        return copy;
      });
      timersRef.current.delete(key);
    }, holdTime);

    timersRef.current.set(key, to);
  };

  const handlePointerCoords = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // fuera del área de la cuadrícula → ignorar
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

    const col = Math.min(columns - 1, Math.max(0, Math.floor((x / rect.width) * columns)));
    const row = Math.min(rows - 1, Math.max(0, Math.floor((y / rect.height) * rows)));

    lightCell(row, col);
  };

  useEffect(() => {
    // manejador unificado throttled con requestAnimationFrame
    const onPointerMove = (e: PointerEvent) => {
      lastPointerRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (lastPointerRef.current) {
          handlePointerCoords(lastPointerRef.current.x, lastPointerRef.current.y);
        }
      });
    };

    document.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      // limpiar timeouts
      timersRef.current.forEach(id => window.clearTimeout(id));
      timersRef.current.clear();
    };
  }, [rows, columns, holdTime]); // si cambias filas/cols, el efecto se re-crea

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        zIndex: 0,
        // no necesitamos que el div capture puntero; escuchamos document:
        // pero mantener pointerEvents: 'none' haría que los divs hijos no reciban eventos si tuvieran,
        // así que lo dejamos por defecto.
      }}
      aria-hidden
    >
      {Array.from({ length: rows * columns }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const color = getColorForColumn(col);
        return (
          <div
            key={index}
            className="w-full h-full transition-colors duration-300"
            style={{
              backgroundColor: hovered[row][col] ? color : 'black',
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveHeroBackground;
