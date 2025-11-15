'use client';

import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Commodity } from '@/types/quotations';

interface CotizationChartProps {
  commodity: Commodity;
}

const CotizationChart: React.FC<CotizationChartProps> = ({ commodity }) => {
  const isPositive = commodity.priceChange24h >= 0;
  const changeColor = isPositive ? '#10B981' : '#EF4444';
  const chartColor = isPositive ? '#10B981' : '#EF4444';

  // Formatear el precio según el commodity
  const formattedPrice = commodity.currentPrice.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Formatear variación
  const formattedChange = `${isPositive ? '+' : ''}${commodity.priceChange24h.toFixed(2)}%`;

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A261E]/40 to-[#0F1112]/60 
                   border border-[#6A7C6F]/30 p-4 transition-all duration-500 
                   hover:scale-[1.02] hover:shadow-lg hover:border-[#10B981]/40 hover:from-[#1A261E]/60 hover:to-[#0F1112]/40"
    >
      {/* Overlay gradient on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative z-10">
        {/* Header: Nombre y símbolo */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-base font-bold text-[#F2F2F2] group-hover:text-[#10B981] transition-colors duration-300">
              {commodity.name}
            </h3>
            <p className="text-xs text-[#F2F2F2]/60 font-mono">{commodity.symbol}</p>
          </div>

          {/* Indicador de tendencia */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${changeColor}15` }}
          >
            {isPositive ? (
              <svg className="w-4 h-4" fill="none" stroke={changeColor} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke={changeColor} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Precio actual */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-[#F2F2F2]">${formattedPrice}</span>
            <span className="text-xs text-[#F2F2F2]/60 font-medium">{commodity.unit}</span>
          </div>

          {/* Variación 24h */}
          <div className="mt-1 flex items-center gap-2">
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full transition-colors duration-300"
              style={{
                color: changeColor,
                backgroundColor: `${changeColor}20`,
              }}
            >
              {formattedChange}
            </span>
          </div>
        </div>

        {/* Gráfico - Más pequeño */}
        <div className="w-full h-12 -mx-4 -mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={commodity.historicalData}
              margin={{ top: 5, right: 10, bottom: 5, left: -20 }}
            >
              <XAxis
                dataKey="timestamp"
                hide={true}
                type="number"
                domain={['dataMin', 'dataMax']}
              />
              <YAxis
                hide={true}
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: `1px solid ${chartColor}`,
                  borderRadius: '6px',
                  fontSize: '11px',
                  padding: '4px 8px',
                }}
                formatter={(value: number | string) => {
                  const numValue = typeof value === 'string' ? parseFloat(value) : value;
                  return [`$${numValue.toFixed(2)}`, 'Precio'];
                }}
                labelFormatter={(timestamp: number | string) => {
                  const timestamp_num = typeof timestamp === 'string' ? parseInt(timestamp) : timestamp;
                  const date = new Date(timestamp_num);
                  return date.toLocaleDateString('es-ES', {
                    month: 'short',
                    day: 'numeric',
                  });
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke={chartColor}
                dot={false}
                strokeWidth={1.5}
                isAnimationActive={true}
                animationDuration={600}
                opacity={0.8}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CotizationChart;
