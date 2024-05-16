import { useState, createContext, useEffect } from "react";



export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("Carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad }

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((productos) => productos.id === itemAgregado.id);


        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito)
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito([...carrito, itemAgregado]);
       
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect (() =>{
        localStorage.setItem("Carrito", JSON.stringify(carrito))
     }, [carrito])

    return (
        <CartContext.Provider value={{ 
            carrito, 
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
