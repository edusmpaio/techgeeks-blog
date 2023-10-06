export const calculatePostDate = (date: Date) => {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffSeconds = diffTime / 1000
  const days = Math.floor(diffSeconds / 86400) // 86400 seconds in a day
  const remainingSeconds = diffSeconds % 86400 // Calculate the remaining seconds
  const hours = Math.floor(remainingSeconds / 3600)
  const minutes = Math.floor((remainingSeconds % 3600) / 60)

  if (days > 0) {
    if (days > 1) {
      return `${days} dias `
    }
    return `${days} dia `
  }

  if (hours > 0 && days < 1) {
    if (hours > 1) {
      return `${hours} horas `
    }
    return `${hours} hora `
  }

  if (minutes > 0 && hours < 1) {
    if (minutes > 1) {
      return `${minutes} minutos `
    }
    return `${minutes} minuto `
  }
}
