import './ItemListContainer.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from '../Loader/Loader'
import { ItemList } from '../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemListContainer = () =>{
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading ] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        //1 llamar la refesrencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoriaId
                    ? query(productosRef, where('categoria', "==", categoriaId) )
                    : productosRef
        // 2.- llamar a esa ref (async)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoriaId])


    return(
    <div>
        {
            loading ? <Loader/>
            : <ItemList productos={productos}/>
        }
    </div>
    )
}