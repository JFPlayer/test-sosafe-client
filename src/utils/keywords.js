
const MAX_KEYWORDS = 6

export const getKeywordsFromLocaleStorage = () => {
  const keywords = localStorage.getItem('keywords')
  if(keywords) {
    return JSON.parse(keywords)
  }
  return []
}

export const setKeywordsOnLocaleStorage = keywords => {
  const newKeyWords = keywords.slice(0,MAX_KEYWORDS)

  localStorage.setItem('keywords', JSON.stringify(newKeyWords))

  return newKeyWords
}