import { useState } from "react"

export const Clicker = () => {

    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState(true)

    const clickear = () =>{
        setCounter(counter + 1)
    }
    const cambiarSaludo = () => {
        setSaludo(!saludo)
    }
    
    return(
        <div>
            <button onClick={clickear}>Click Me</button>
            <p>clicks: {counter}</p>
            <br/>
            <button onClick={cambiarSaludo}>Click Me2</button>
            <p className={saludo ? 'hola' : 'chau'}>{saludo ? 'Hola Mundo' : 'Chau Mundo'}</p>
        </div>
    )
}