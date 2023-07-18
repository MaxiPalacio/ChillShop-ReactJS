import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const PokeApi = () => {
    const [Pokemon, setPokemon] = useState([])
    const [id, setId] = useState(1)

    

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
    
            setPokemon(data)
        })
    },[id]);

    const handleSiguiente = () => setId(id + 1)
    const handleAnterior = () => id > 1 && setId(id - 1)


    return(
        <div className="main-container">
            <hr />
            {Pokemon &&
            <div>
                <h4>{Pokemon.name}</h4>
                <p><strong>ID:</strong> #{Pokemon.id}</p>
                <img src={Pokemon.sprites?.front_default}/>
            </div>}
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </div>
    )
}