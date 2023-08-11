import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa"
import './CartView.scss'

export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito} = useContext(CartContext)

    if(cart.length === 0){
        return(
            <div className="carritoVacioContainer">
                <h1 className="TitleVacio" >Tu carrito esta vacio :(</h1>
                <Link to='/' className="botonComprar" >Ir a comprar</Link>
            </div>
        )
    }
    return(
        <div className="carritoMainContainer">
            <h1 className="Title">Tu Carrito</h1>
            <br />
            {
                cart.map((item) => (
                    <div key={item.id} className="carritoContainer">
                        <img src={item.img} alt={item.nombre} className="carritoImg"/>
                        <hr />
                        <h2 className="carritoText"> Producto: <br />{item.nombre}</h2>
                        <hr />
                        <h2 className="carritoText">Cantidad: <br />{item.cantidad}</h2>
                        <hr />
                        <h2 className="carritoText">Precio: <br />$ {item.precio}</h2>
                        <button onClick={() => removerDelCarrito(item.id)} className="botonRemove"><FaTrashAlt/></button>
                    </div>
                ))
            }
                <h3 className="Total">Total: $ {totalCompra()}</h3>
            <div className="totalContainer">
                <button onClick={vaciarCarrito} className="vaciarCarrito">Vaciar Carrito <FaTrashAlt/></button>
                <Link className="irCheckout" to='/checkout'>Terminar mi compra</Link>
            </div>
        </div>
    )
}