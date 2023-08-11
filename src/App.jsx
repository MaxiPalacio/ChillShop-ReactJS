
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { Header } from './components/Header.jsx';
import { Contacto } from './components/Contacto.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { CartView } from './components/CartView/CartView.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { Checkout } from './components/Checkout/Checkout.jsx';



function App() {
  
  return (

   <CartProvider>

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/contacto' element={ <Contacto/> } />
          <Route path='/carrito' element={ <CartView/> }/>
          <Route path="/checkout" element={ <Checkout/> }/>
          <Route path='/productos/:categoriaId' element={ <ItemListContainer/>}/>
          <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/' element = { <ItemListContainer/> }/>
          <Route path='*' element={ <Navigate to='/'/> } />
          
        </Routes>
    
          
      </BrowserRouter>

   </CartProvider>


  )
}

export default App
