import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"> <h1>VICKRO</h1></Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/">Inicio</Link></li>
        <li><Link className="menu-link" to="/productos">Productos</Link></li>
        <li><Link className="menu-link" to="/productos/Jeans">Jeans</Link></li>
        <li><Link className="menu-link" to="/productos/Buzos">Buzos</Link></li>
        <li><Link className="menu-link" to="/productos/Remeras">Remeras</Link></li>
        <li><Link className="menu-link" to="/productos/Camperas">Camperas</Link></li>
        <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
        <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
        <li><CartWidget/></li>

      </ul>
    </nav>
  )
}
export default NavBar;