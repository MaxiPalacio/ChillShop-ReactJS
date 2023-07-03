

export const Header = () => {
    

    return(
        <nav className="nav">
        <h1><a href="#" className="logo">The Chill Shop</a></h1>
        
        <ul className="lista-nav" id="nav-links">
            <li className="li-lista"><a href="#" className="links">Inicio</a></li>
            <li className="li-lista"><a href="./pages/cuenta.html" className="links">Cuenta</a></li>
            <li className="li-lista"><a href="./pages/carrito.html" className="links">Carrito</a></li>

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