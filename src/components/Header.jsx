import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
    const [abrir, setAbrir] = useState(false)

    const mantenerAbierto = () => {
        setAbrir(!abrir)
    }
    return(
        <nav className="nav">
        <h1><a href="#" className="logo">The Chill Shop</a></h1>
        
        <ul className="lista-nav" id="nav-links">
            <li className="li-lista"><Link to="/" className="links">Inicio</Link></li>
            <li className="li-lista"><Link to="/contacto" className="links">Contacto</Link></li>
            <Link onClick={mantenerAbierto} className="links">
            Skate
          </Link>
          {abrir && 
            <ul className="dropdown-menu">
              <li><Link to="/productos/trucks" onClick={mantenerAbierto} >Trucks</Link></li>
              <li><Link to="/prodcutos/tablas" onClick={mantenerAbierto} >Tablas</Link></li>
              <li><Link to="/productos/ruedas" onClick={mantenerAbierto} >Ruedas</Link></li>
              <li><Link to="/productos/rulemanes" onClick={ mantenerAbierto } >Rulemanes</Link></li>
              <li><Link to="/productos/lijas" onClick={mantenerAbierto} >Lijas</Link></li>
            </ul>}

            <div id="barra-busqueda">
                <input type="search" placeholder="Buscar" className="input" />
                <span>
                    <i className="i" id="icono-busqueda"></i>
                </span>
              </div>
        </ul>        
    </nav>
    )
}