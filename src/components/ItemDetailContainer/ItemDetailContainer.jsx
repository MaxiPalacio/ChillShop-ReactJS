import '../ItemListContainer/ItemListContainer.scss'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { Loader } from '../Loader/Loader'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc,  } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState(null)
    const [loading, setLoading ] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

          
  
          const itemRef = doc(db, "productos", itemId)
          getDoc(itemRef)
              .then((doc) => {  
                setItem({
                  id: doc.id,
                  ...doc.data()
                })
                
              })
              .catch(e => console.log(e))
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