export const toBrazilianReal = (value = 0) => (
  value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
)