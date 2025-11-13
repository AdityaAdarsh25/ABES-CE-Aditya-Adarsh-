
import React from 'react'
import './Weather.css'

function Weather({ data }) {
  if (!data || !data.location) return null;

  return (
    <div id="card">
      <h4>{data.location.name}</h4>
      <h4>{data.location.country}</h4>
      <h4>{data.current.temp_c}°C</h4>
    </div>
  )
}

export default Weather
