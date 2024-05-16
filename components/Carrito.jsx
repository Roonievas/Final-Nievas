import React, { useContext } from 'react'
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {

  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container" >
        <h1 className="main-title">Carrito</h1>
        {
            carrito.map((prod) =>(
              <div key={prod.id}>
            <h3>{prod.producto}</h3>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <p>cant: {prod.cantidad}</p>
            </div>
            ))
        }
           
        {
           carrito.length >0 ?
           <>
           <h2>Precio Total: $ {precioTotal()}</h2> 
           <button onClick={handleVaciar}>Vaciar</button>
           <Link to="/checkout"> Finalizar Compra </Link>
           </>:
           <h2>El carrito está vacio</h2>
        }
        
        
      
    </div>
  )
}

export default Carrito;
