/**
 * Datos mock de cotizaciones de commodities
 * Incluye: Metales preciosos, Metales industriales, Agrominería, Crypto y Acciones
 * 
 * Estos datos están diseñados para reflejar el portafolio completo de Fil-On Tech
 */

import { Commodity } from '@/types/quotations';

// Generar datos históricos realistas (últimos 7 días)
const generateHistoricalData = (currentPrice: number, daysBack: number = 7) => {
  const data = [];
  const now = Date.now();
  const dayInMs = 24 * 60 * 60 * 1000;

  for (let i = daysBack; i >= 0; i--) {
    const variance = (Math.random() - 0.5) * 0.15 * currentPrice; // Variación de ±7.5%
    data.push({
      timestamp: now - i * dayInMs,
      price: currentPrice + variance,
    });
  }

  return data;
};

// ==================== METALES PRECIOSOS ====================
export const preciousMetals: Commodity[] = [
  {
    id: 'gold',
    name: 'Oro',
    symbol: 'XAU/USD',
    category: 'precious-metals',
    currentPrice: 2039.50,
    priceChange24h: 1.24,
    unit: 'USD/oz',
    color: '#D4AF37',
    historicalData: generateHistoricalData(2039.50),
  },
  {
    id: 'silver',
    name: 'Plata',
    symbol: 'XAG/USD',
    category: 'precious-metals',
    currentPrice: 24.32,
    priceChange24h: -0.87,
    unit: 'USD/oz',
    color: '#C0C0C0',
    historicalData: generateHistoricalData(24.32),
  },
  {
    id: 'platinum',
    name: 'Platino',
    symbol: 'XPT/USD',
    category: 'precious-metals',
    currentPrice: 1018.75,
    priceChange24h: 2.15,
    unit: 'USD/oz',
    color: '#A7A7A7',
    historicalData: generateHistoricalData(1018.75),
  },
];

// ==================== PIEDRAS PRECIOSAS ====================
export const gemstones: Commodity[] = [
  {
    id: 'emerald',
    name: 'Esmeraldas',
    symbol: 'EMR/USD',
    category: 'precious-metals',
    currentPrice: 3850.25,
    priceChange24h: 2.45,
    unit: 'USD/ct',
    color: '#50C878',
    historicalData: generateHistoricalData(3850.25),
  },
  {
    id: 'diamond',
    name: 'Diamantes',
    symbol: 'DMD/USD',
    category: 'precious-metals',
    currentPrice: 5420.75,
    priceChange24h: 1.67,
    unit: 'USD/ct',
    color: '#E8F8F5',
    historicalData: generateHistoricalData(5420.75),
  },
];

// ==================== METALES INDUSTRIALES ====================
export const industrialMetals: Commodity[] = [
  {
    id: 'copper',
    name: 'Cobre',
    symbol: 'HG/USD',
    category: 'industrial-metals',
    currentPrice: 4.32,
    priceChange24h: 1.56,
    unit: 'USD/lb',
    color: '#B87333',
    historicalData: generateHistoricalData(4.32),
  },
  {
    id: 'lithium',
    name: 'Litio',
    symbol: 'LIT/USD',
    category: 'industrial-metals',
    currentPrice: 156.50,
    priceChange24h: -2.34,
    unit: 'USD/kg',
    color: '#E0E0E0',
    historicalData: generateHistoricalData(156.50),
  },
  {
    id: 'tin',
    name: 'Estaño',
    symbol: 'SN/USD',
    category: 'industrial-metals',
    currentPrice: 32.45,
    priceChange24h: 0.92,
    unit: 'USD/kg',
    color: '#C0C0C0',
    historicalData: generateHistoricalData(32.45),
  },
  {
    id: 'zinc',
    name: 'Zinc',
    symbol: 'ZN/USD',
    category: 'industrial-metals',
    currentPrice: 2.78,
    priceChange24h: -1.23,
    unit: 'USD/lb',
    color: '#6B7280',
    historicalData: generateHistoricalData(2.78),
  },
  {
    id: 'nickel',
    name: 'Níquel',
    symbol: 'NI/USD',
    category: 'industrial-metals',
    currentPrice: 8.92,
    priceChange24h: 1.88,
    unit: 'USD/lb',
    color: '#D4D4D8',
    historicalData: generateHistoricalData(8.92),
  },
];

// ==================== AGROMINERÍA ====================
export const agriculturalCommodities: Commodity[] = [
  {
    id: 'coffee',
    name: 'Café',
    symbol: 'KC/USD',
    category: 'agricultural',
    currentPrice: 223.45,
    priceChange24h: 1.12,
    unit: 'USD/lb',
    color: '#6F4E37',
    historicalData: generateHistoricalData(223.45),
  },
  {
    id: 'cocoa',
    name: 'Cacao',
    symbol: 'CC/USD',
    category: 'agricultural',
    currentPrice: 3245.80,
    priceChange24h: 2.67,
    unit: 'USD/metric ton',
    color: '#8B4513',
    historicalData: generateHistoricalData(3245.80),
  },
];

// ==================== FINANCIERO (CRYPTO + ACCIONES) ====================
export const financialAssets: Commodity[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC/USD',
    category: 'financial',
    currentPrice: 43250.75,
    priceChange24h: 3.45,
    unit: 'USD',
    color: '#F7931A',
    historicalData: generateHistoricalData(43250.75),
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH/USD',
    category: 'financial',
    currentPrice: 2281.30,
    priceChange24h: 2.89,
    unit: 'USD',
    color: '#627EEA',
    historicalData: generateHistoricalData(2281.30),
  },
  {
    id: 'sp500',
    name: 'S&P 500',
    symbol: 'SPX/USD',
    category: 'financial',
    currentPrice: 5832.14,
    priceChange24h: 0.87,
    unit: 'Points',
    color: '#1E40AF',
    historicalData: generateHistoricalData(5832.14),
  },
  {
    id: 'mining-etf',
    name: 'Global X Mining ETF',
    symbol: 'PICK/USD',
    category: 'financial',
    currentPrice: 32.67,
    priceChange24h: 1.34,
    unit: 'USD',
    color: '#059669',
    historicalData: generateHistoricalData(32.67),
  },
];

// ==================== COLECCIONES ORGANIZADAS ====================
export const commoditiesByCategory = {
  'precious-metals': {
    id: 'precious-metals',
    title: 'Metales Preciosos',
    description: 'Oro, plata y platino - pilares de la riqueza mineral',
    commodities: preciousMetals,
  },
  'gemstones': {
    id: 'gemstones',
    title: 'Piedras Preciosas',
    description: 'Esmeraldas y diamantes - joyas del sector minero latinoamericano',
    commodities: gemstones,
  },
  'industrial-metals': {
    id: 'industrial-metals',
    title: 'Metales Industriales',
    description: 'Cobre, litio, estaño, zinc y níquel - esenciales para la tecnología',
    commodities: industrialMetals,
  },
  'agricultural': {
    id: 'agricultural',
    title: 'Agrominería',
    description: 'Café y cacao - productos de alto valor del sector agrominero',
    commodities: agriculturalCommodities,
  },
  'financial': {
    id: 'financial',
    title: 'Activos Financieros',
    description: 'Criptomonedas, índices bursátiles y fondos de minería',
    commodities: financialAssets,
  },
};

// ==================== TODAS LAS COMMODITIES ====================
export const allCommodities: Commodity[] = [
  ...preciousMetals,
  ...gemstones,
  ...industrialMetals,
  ...agriculturalCommodities,
  ...financialAssets,
];
