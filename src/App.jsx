import  Card  from './components/Card.jsx';
import { Contenedor } from './components/Contenedor';
import { Header } from './components/Header';



function App() {



  return (
    
    <>
      <Header/>
    
        <Contenedor>   
          
          <Card url='/src/assets/ruedas1.png' nombre='Spitfire' desc='Ruedas Spitfire 54mm' precio={1500}/>
          <Card url='/src/assets/tabla1.png' nombre='Element' desc='Tabla Element 8.5' precio={4000}/>
          <Card url='/src/assets/Trucks1.png' nombre='Lab' desc='Trucks Lab 139mm' precio={2500}/>
          
        </Contenedor>



    </>
  )
}

export default App
