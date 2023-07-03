
 const Card = ({url, nombre, desc, precio} ) => {

    return(
        <div className="cards">
          <img src={url} alt="" />

            <h3 className="product-name">{nombre}</h3>

            <p className="product-detail">{desc}</p>

            <p><span>$</span><span className="product-cost">{precio}</span></p>

            <div className="buy-btn">Agregar al carrito</div>

        </div>
    )
}
export default Card