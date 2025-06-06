export type RiskLevel = 'Baixo' | 'Médio' | 'Alto';

export function calculateRisk(humidity: number, slope: number): RiskLevel {
  if (humidity > 85 || slope > 45) return 'Alto';
  if (humidity > 70 || slope > 30) return 'Médio';
  return 'Baixo';
}
