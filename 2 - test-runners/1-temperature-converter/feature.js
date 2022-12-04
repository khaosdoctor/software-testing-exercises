function converter(temperature, inUnit = 'C', outUnit = 'F') {
  const throwInvalidUnitError = () => {
    throw new Error('Invalid unit')
  }
  const t = Number(temperature)

  if (isNaN(t)) throw new Error('Invalid temperature')
  if (!['C', 'F', 'K'].includes(inUnit) || !['C', 'F', 'K'].includes(outUnit)) throwInvalidUnitError()

  switch (inUnit) {
    case 'C':
      switch (outUnit) {
        case 'F':
          return t * 1.8 + 32
        case 'K':
          return t + 273.15
        default:
          return t
      }
    case 'F':
      switch (outUnit) {
        case 'C':
          return (t - 32) / 1.8
        case 'K':
          return (t - 32) / 1.8 + 273.15
        default:
          return t
      }
    case 'K':
      switch (outUnit) {
        case 'C':
          return t - 273.15
        case 'F':
          return (t - 273.15) * 1.8 + 32
        default:
          return t
      }
    default:
      return throwInvalidUnitError()
  }
}

module.exports = {
  converter
}
