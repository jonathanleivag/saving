export const formatMoney = (value: number): string => {
  return value.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })
}
