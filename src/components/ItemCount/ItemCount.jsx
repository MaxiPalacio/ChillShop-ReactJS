
import './ItemCount.scss'

export const ItemCount = ({max, cantidad, setCantidad, agregar}) => {

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1) 
    }

    const sumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    return(

        <div className='buttonsContainer'>

            <button onClick={restar} className={`boton ${cantidad === 1 ? 'danger' : 'primary'}`} disabled={cantidad === 1}>-</button>

            <span className='cantidad'>{cantidad}</span>

            <button onClick={sumar} className={`boton ${cantidad === max ? 'danger' : 'primary'}`} disabled={cantidad === max}>+</button>
            <hr />

            <button onClick={agregar} className='botonAgregar'>Agregar</button>

        </div>
    )
}