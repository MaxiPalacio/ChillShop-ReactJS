import { useContext, useState } from 'react'
import './ItemDetail.scss'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({item})  => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad , setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }


    return(
        <div className="itemMainContainer">
            <img src={item.img} className='itemImg'/>
            <div className='itemContainer'>
                <h1 className="itemTitle">{item.nombre}</h1>
                <p className='itemPrice'>${item.precio}</p>
                <p className='itemCuotas'>En 6x $ {Number.parseInt(item.precio / 6)}</p>
                <p className="itemDesc">{item.desc}</p>
                {
                    item.stock < 10 && <p className='itemStock'>Quedan sólo {item.stock} unidades!!</p>
                }
                {
                    isInCart(item.id)
                    ? <Link className='botonPagar' to='/carrito'>Ir a Pagar</Link>
                    : <ItemCount
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
                }
            </div>
        </div>

    )
}