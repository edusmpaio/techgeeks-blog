export const calculateReadingTime = (text: string) => {
  const wordsCount = text.split(' ').filter((word) => word !== '').length
  const timeToRead = Math.round(wordsCount / 200)
  return timeToRead
}
