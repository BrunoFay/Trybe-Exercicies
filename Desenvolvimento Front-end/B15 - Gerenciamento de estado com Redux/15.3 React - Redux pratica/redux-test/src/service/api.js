
async function digimons(search) {
  const URL = `https://digimon-api.vercel.app/api/digimon/${search}`
  const response = await fetch(URL)
  const data = await response.json()
  return data
  
}
export default digimons