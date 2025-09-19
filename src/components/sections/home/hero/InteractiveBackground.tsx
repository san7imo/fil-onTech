'use client';
import React, { useEffect, useRef, useState } from 'react';

interface InteractiveHeroBackgroundProps {
  holdTime?: number;  // ms
  cellSize?: number;  // px, tamaño deseado de cada cuadro
}

const InteractiveHeroBackground: React.FC<InteractiveHeroBackgroundProps> = ({
  holdTime = 500,
  cellSize = 40, // cada cuadro aprox 40px
}) => {
  const startColor = [0, 128, 0];   // verde
  const endColor = [210, 180, 140]; // tan

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(20);
  const [hovered, setHovered] = useState<boolean[][]>([]);

  const timersRef = useRef<Map<string, number>>(new Map());

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
      if (!prev[row] || prev[row][col]) return prev;
      const copy = prev.map(r => [...r]);
      copy[row][col] = true;
      return copy;
    });

    if (timersRef.current.has(key)) {
      clearTimeout(timersRef.current.get(key)!);
    }

    const to = window.setTimeout(() => {
      setHovered(prev => {
        if (!prev[row]) return prev;
        const copy = prev.map(r => [...r]);
        copy[row][col] = false;
        return copy;
      });
      timersRef.current.delete(key);
    }, holdTime);

    timersRef.current.set(key, to);
  };

  // 🔹 Recalcular filas/columnas según tamaño del contenedor
  useEffect(() => {
    if (!containerRef.current) return;

    const updateGrid = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const newColumns = Math.max(1, Math.floor(rect.width / cellSize));
      const newRows = Math.max(1, Math.floor(rect.height / cellSize));
      setColumns(newColumns);
      setRows(newRows);
      setHovered(Array.from({ length: newRows }, () => Array(newColumns).fill(false)));
    };

    updateGrid();

    const resizeObserver = new ResizeObserver(updateGrid);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [cellSize]);

  // 🔹 Evento global de puntero
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const col = Math.min(columns - 1, Math.max(0, Math.floor((x / rect.width) * columns)));
      const row = Math.min(rows - 1, Math.max(0, Math.floor((y / rect.height) * rows)));

      lightCell(row, col);
    };

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => document.removeEventListener('pointermove', onPointerMove);
  }, [rows, columns, holdTime]);

  // 🔹 Animación inicial de ola
  useEffect(() => {
    if (rows === 0 || columns === 0) return;
    let delay = 0;
    const step = 20;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        setTimeout(() => {
          setHovered(prev => {
            const copy = prev.map(row => [...row]);
            if (copy[r]) copy[r][c] = true;
            return copy;
          });
          setTimeout(() => {
            setHovered(prev => {
              const copy = prev.map(row => [...row]);
              if (copy[r]) copy[r][c] = false;
              return copy;
            });
          }, 1000);
        }, delay);
        delay += step;
      }
    }
  }, [rows, columns]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 grid bg-black"
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
        const color = getColorForColumn(col);
        return (
          <div
            key={index}
            className="w-full h-full transition-colors duration-300 border border-neutral-900/60 box-border"
            style={{
              backgroundColor: hovered[row]?.[col] ? color : 'black',
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveHeroBackground;
