// ...existing code...
import React, { useState } from 'react'
import './book.css'
function Book(props) {
    const [count, setCount] = useState(0)
    const MAX = props.max ?? 10

    // allow unlimited increments via '+'
    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => Math.max(0, prev - 1))
    }

    const addToCart = () => {
        if (count > MAX) {
            alert('Max capacity exceeded')
            return
        }
        if (count === 0) {
            alert('Please select quantity before adding to cart')
            return
        }
        alert(`${count} item(s) added to cart`)
        if (props.onAddToCart) {
            props.onAddToCart({ title: props.title, price: props.price, quantity: count })
        }
    }

    return (
        <div id="book">
            <img src="https://m.media-amazon.com/images/I/91p5RF8nPFL._AC_UF1000,1000_QL80_.jpg" alt="" height={100} width={100} />
            <h2>Title: {props.title}</h2>
            <h2>Price: {props.price}</h2>
            <div>
                <button onClick={decrement} disabled={count === 0}>-</button>
                <span style={{ margin: '0 10px' }}>{count}</span>
                {/* + is unlimited; addToCart enforces MAX */}
                <button onClick={increment}>+</button>
            </div>
            <div style={{ marginTop: 10 }}>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Book
// ...existing code...
