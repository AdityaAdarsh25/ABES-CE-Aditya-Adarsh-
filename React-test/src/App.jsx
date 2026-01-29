import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setProduct(json)
      })
      .catch((err) => console.error(err))
  }, [])

  const first = product
    ? {
        image: product.image,
        name: product.title,
        studentClass: product.category,
      }
    : {
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Aditya Adarsh',
        studentClass: '3rd Year',
      }

      
  return (
    <div>
      <header className="app-header">Student Cards</header>

      <div className="cards-grid">
        <Card {...first} />

        <Card
          image="https://randomuser.me/api/portraits/women/44.jpg"
          name="Priya Sharma"
          studentClass="2nd Year"
        />

        <Card
          image="https://randomuser.me/api/portraits/men/76.jpg"
          name="Rahul Verma"
          studentClass="1st Year"
        />
      </div>

      <footer className="app-footer">Data: fakestoreapi.com</footer>
    </div>
  )
}

export default App
