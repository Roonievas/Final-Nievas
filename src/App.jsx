import Contacto from "../components/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Nosotros from "../components/Nosotros";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  CartProvider, } from "../components/context/CartContext";
import Carrito from "../components/Carrito";
import Checkout from "../components/Checkout";



function App() {
   

  return (
    <CartProvider>

   

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>


      </BrowserRouter>
      </CartProvider>



  );
}

export default App;
