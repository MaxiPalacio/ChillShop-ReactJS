import '../ItemListContainer/ItemListContainer.scss'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { Loader } from '../Loader/Loader'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState(null)
    const [loading, setLoading ] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
  
          pedirDatos()
              .then(r => {
                setItem( r.find(prod => prod.id === Number(itemId) ) )
              })
              .finally(() => setLoading(false))
      },[])


    return(
    <>
        {
            loading ? <Loader/>
            : <ItemDetail item={item}/>
        }
    </>
    )
}