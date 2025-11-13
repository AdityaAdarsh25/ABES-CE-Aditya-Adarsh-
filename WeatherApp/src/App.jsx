// ...existing code...
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Weather from './Components/Weather.jsx'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('New Delhi') // default city
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (cityName) => {
    if (!cityName) return
    setLoading(true)
    setError(null)
    try {
      const key = '895a5d4b09f94e20bb392702251311' // move to env in production
      const q = encodeURIComponent(cityName.trim())
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${q}`)
      if (!res.ok) throw new Error(`API error: ${res.status}`)
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      console.error(err)
      setWeather(null)
      setError('Could not fetch weather. Check city name or network.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // fetch default city on mount
    fetchWeather(city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = (searchCity) => {
    setCity(searchCity)
    fetchWeather(searchCity)
  }

  return (
    <div>
      <Navbar city={city} setCity={setCity} onSearch={handleSearch} />

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {loading && <div>Loading weather...</div>}
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        {!loading && weather && <Weather data={weather} />}
        {!loading && !weather && !error && <div>No data</div>}
      </div>
    </div>
  )
}

export default App
// ...existing code...