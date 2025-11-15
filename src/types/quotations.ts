/**
 * Tipos para el sistema de cotizaciones de commodities
 * Incluye: Metales preciosos, Metales industriales, Agrominería, Crypto y Acciones
 */

export type CommodityCategory = 'precious-metals' | 'industrial-metals' | 'agricultural' | 'financial';

export interface PricePoint {
  timestamp: number;
  price: number;
}

export interface Commodity {
  id: string;
  name: string;
  symbol: string;
  category: CommodityCategory;
  currentPrice: number;
  priceChange24h: number; // Variación en porcentaje
  unit: string; // 'USD/oz', 'USD/lb', 'USD/kg', etc.
  icon?: string;
  color: string; // Color hex para identificar en gráficos
  historicalData: PricePoint[]; // Últimos 7-30 días
}

export interface CommoditySection {
  id: CommodityCategory;
  title: string;
  description: string;
  icon?: React.ReactNode;
  commodities: Commodity[];
}

export interface QuotationsContextType {
  commodities: Commodity[];
  lastUpdated: Date;
  loading: boolean;
  error: string | null;
}
