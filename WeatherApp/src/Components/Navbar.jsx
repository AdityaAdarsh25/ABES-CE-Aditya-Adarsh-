// ...existing code...
import React from 'react'
import './Navbar.css'

function Navbar({ city, setCity, onSearch }) {
  const submit = (e) => {
    e.preventDefault()
    onSearch(city)
  }

  return (
    <header className="w-navbar">
      <div className="w-brand">WeatherApp</div>
      <form className="w-search" onSubmit={submit}>
        <input
          className="w-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
        />
        <button className="w-btn" type="submit">Search</button>
      </form>
    </header>
  )
}

export default Navbar
// ...existing code...