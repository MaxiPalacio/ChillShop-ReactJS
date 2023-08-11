import './ItemCard.scss'
import { Link } from "react-router-dom"



 const ItemCard = ({item}) => {


    return(
      <div className="cards" key={item.id}>
        <img src={item.img} alt={item.nombre} />

          <h3 className="product-name">{item.nombre}</h3>

          <p className="product-detail">{item.desc}</p>

          <p><span>$</span><span className="product-cost">{item.precio}</span></p>


          <Link to={`/detalle/${item.id}`} className="buy-btn">Ver más</Link>

      </div>   
)
}
export default ItemCard