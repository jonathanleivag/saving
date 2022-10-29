export const formatMoney = (value: number): string => {
  return value.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })
}

export const formatMoneyAndroid = (numero: number) => {
  const op = numero
    .toString()
    .split('')
    .reverse()

  let new1 = ''

  for (let i = 0; i < op.length; i++) {
    if (i % 3 === 0 && i !== 0) new1 = '.' + new1
    new1 = op[i] + new1
  }
  return new1
}
