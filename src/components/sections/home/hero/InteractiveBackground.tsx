'use client';
import React, { useEffect, useRef, useState } from 'react';

interface InteractiveHeroBackgroundProps {
  holdTime?: number;  // ms
  cellSize?: number;  // px
}

const InteractiveHeroBackground: React.FC<InteractiveHeroBackgroundProps> = ({
  holdTime = 500,
  cellSize = 40,
}) => {
  const startColor = [0, 128, 0];
  const endColor = [210, 180, 140];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(20);
  const [hovered, setHovered] = useState<boolean[][]>([]);

  const timersRef = useRef<Map<string, number>>(new Map());
  const inactivityTimerRef = useRef<number | null>(null);
  const randomIntervalRef = useRef<number | null>(null);

  const getColorForColumn = (col: number) => {
    const ratio = columns > 1 ? col / (columns - 1) : 0;
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const lightCell = (row: number, col: number, duration = holdTime) => {
    if (row < 0 || col < 0 || row >= rows || col >= columns) return;
    const key = `${row}-${col}`;

    setHovered(prev => {
      const copy = prev.map(r => [...r]);
      if (copy[row]) copy[row][col] = true;
      return copy;
    });

    if (timersRef.current.has(key)) {
      clearTimeout(timersRef.current.get(key)!);
    }

    const to = window.setTimeout(() => {
      setHovered(prev => {
        const copy = prev.map(r => [...r]);
        if (copy[row]) copy[row][col] = false;
        return copy;
      });
      timersRef.current.delete(key);
    }, duration);

    timersRef.current.set(key, to);
  };

  // 🔹 Recalcular grid dinámicamente
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

  // 🔹 Hover (movimiento del mouse)
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      resetInactivityTimer();
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

  // 🔹 Animación inicial (efecto “destellos”)
  useEffect(() => {
    if (rows === 0 || columns === 0) return;
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const count = 5 + Math.floor(Math.random() * 6); // 5–10 cuadros a la vez
        for (let j = 0; j < count; j++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * columns);
          lightCell(row, col, 800);
        }
      }, Math.random() * 2000);
    }
  }, [rows, columns]);

  // 🔹 Inactividad → parpadeo aleatorio
  const startRandomBlinking = () => {
    if (randomIntervalRef.current) return;
    randomIntervalRef.current = window.setInterval(() => {
      const count = 10 + Math.floor(Math.random() * 11); // 10–20 cuadros
      for (let i = 0; i < count; i++) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * columns);
        lightCell(row, col, 1200);
      }
    }, 300); // cada 300ms
  };

  const stopRandomBlinking = () => {
    if (randomIntervalRef.current) {
      clearInterval(randomIntervalRef.current);
      randomIntervalRef.current = null;
    }
  };

  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    stopRandomBlinking();
    inactivityTimerRef.current = window.setTimeout(() => {
      startRandomBlinking();
    }, 2000); // 2s sin mover el mouse
  };

  useEffect(() => {
    resetInactivityTimer();
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (randomIntervalRef.current) clearInterval(randomIntervalRef.current);
    };
  }, []);

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
        const isLit = hovered[row]?.[col];

        return (
          <div
            key={index}
            className="w-full h-full transition-colors duration-800 ease-in-out"
            style={{
              backgroundColor: isLit ? color : 'black',
              border: `1px solid ${isLit ? 'black' : 'transparent'}`, // 🔹 borde fino solo cuando se ilumina
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveHeroBackground;
