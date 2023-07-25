import './ItemListContainer.scss'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { Loader } from '../Loader/Loader'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () =>{
    
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
    <div>
        {
            loading ? <Loader/>
            : <ItemList productos={productos}/>
        }
    </div>
    )
}