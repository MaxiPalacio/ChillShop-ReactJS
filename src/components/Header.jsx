import { Link } from "react-router-dom"

export const Header = () => {
    

    return(
        <nav className="nav">
        <h1><a href="#" className="logo">The Chill Shop</a></h1>
        
        <ul className="lista-nav" id="nav-links">
            <li className="li-lista"><Link to="/" className="links">Inicio</Link></li>
            <li className="li-lista"><Link to="/contacto" className="links">Contacto</Link></li>
            <li className="li-lista"><Link to="/productos/trucks" className="links">Trucks</Link></li>
            <li className="li-lista"><Link to="/productos/tablas" className="links">Tablas</Link></li>

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