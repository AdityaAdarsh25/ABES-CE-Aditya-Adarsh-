import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="logo-wrap">
        <img src={logo} alt="Logo" className="logo" />
        <span className="home-label">Home</span>
      </div>
      <nav className="site-nav">
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  )
}
