export const formatCurrency = (
  value: number,
  style: string = 'currency',
  currency: string = 'COP'
): string => {
  return new Intl.NumberFormat('es-CO', {
    style,
    currency,
    minimumFractionDigits: 2,
  }).format(value);
};
