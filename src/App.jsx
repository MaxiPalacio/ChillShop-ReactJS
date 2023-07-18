
import Card from './components/Card.jsx';
import { Contenedor } from './components/Contenedor.jsx';
import { Header } from './components/Header.jsx';
import { Contacto } from './components/Contacto.jsx';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';



function App() {



  return (
    
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/contacto' element={ <Contacto/> } />
        <Route path='/productos/:categoriaId' element={ <Contenedor> <Card/> </Contenedor> }/>
        <Route path='*' element={ <Navigate to='/'/> } />
        <Route path='/' element = { <Contenedor> <Card/> </Contenedor> }/>
        
      </Routes>
  
        
    </BrowserRouter>


  )
}

export default App
