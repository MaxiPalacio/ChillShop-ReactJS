import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { bienvenida , despedida} from './saludo.js'
import Tutores from './ejemplos/Tutores'

function App() {
  const [count, setCount] = useState(0)

  // bienvenida()
  // despedida()
  const nombre = 'ChillShop'
  const direc = 'Urrutia'


  return (
    
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{nombre}</h1>
      <h2>{direc}</h2>
      < Tutores />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          el numero es {count}
        </button>
        <p>
          Bienvenidos a ReactJS :)
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
