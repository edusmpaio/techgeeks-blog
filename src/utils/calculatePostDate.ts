export const calculatePostDate = (date: Date) => {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffSeconds = diffTime / 1000
  const days = Math.floor(diffSeconds / 86400) // 86400 seconds in a day
  const remainingSeconds = diffSeconds % 86400 // Calculate the remaining seconds
  const hours = Math.floor(remainingSeconds / 3600)
  const minutes = Math.floor((remainingSeconds % 3600) / 60)

  let result = ''

  if (days > 0) {
    result += `${days}d `
  }

  if (hours > 0) {
    result += `${hours}h `
  }

  if (minutes > 0) {
    result += `${minutes}m `
  }

  return result.trim()
}
