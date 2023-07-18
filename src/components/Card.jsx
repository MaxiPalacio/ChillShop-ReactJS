import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from "react-router-dom"


 const Card = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading ] = useState(true)

  const { categoriaId } = useParams()

    useEffect(() => {
      setLoading(true)

        pedirDatos()
            .then(r => {
              if(categoriaId) { 

                setProductos( r.filter(prod => prod.categoria == categoriaId ) )

              } else {

                setProductos(r)
                
              }
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    },[categoriaId])


    return(
<>

  { 
    loading? (<p style={{textAlign: 'center', fontSize:'3rem'}} >Cargando...</p>)
    : productos.map((prod) => (
      <div className="cards" key={prod.id}>
        <img src={prod.img} alt={prod.nombre} />

          <h3 className="product-name">{prod.nombre}</h3>

          <p className="product-detail">{prod.desc}</p>

          <p><span>$</span><span className="product-cost">{prod.precio}</span></p>

          <div className="buy-btn">Agregar al carrito</div>

      </div>
    ))
 }
</>
      
)
}
export default Card