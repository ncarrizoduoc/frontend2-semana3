import { useState } from 'react'
import MarketContext from './MarketContext'
import articulosIniciales from '../data/articulos.json'

// Carga lista de articulos desde el archivo JSON
function construirEstadoInicial() {
    return articulosIniciales.map((articulo) => ({
        ...articulo,
        id: crypto.randomUUID(),
        stock: articulo.stock ?? 0 // Si no tiene stock definido, se usa 0 por defecto
    }))
}

function MarketProvider({ children }) {
    const [articulos, setArticulos] = useState(construirEstadoInicial)

    // Funcion para agregar un articulo al inventario
    const agregarArticulo = (articulo) => {
        const nuevoArticulo = {
            ...articulo,
            id: crypto.randomUUID(),
            stock: 0
        }

        setArticulos((previos) => [...previos, nuevoArticulo])

        return {exito : true}
    }

    const actualizarStock = (id, cantidad) => {
        setArticulos((actuales) => actuales.map((articulo) => (
            articulo.id === id
                ? { ...articulo, stock: Math.max(0, articulo.stock + cantidad) }
                : articulo
        )))
    }

    // Disponibilizar articulos y sus acciones a todos los componentes "hijos"
    return (
        <MarketContext.Provider value={{ articulos, agregarArticulo, actualizarStock }}>
            {children}
        </MarketContext.Provider>
    )
}

export default MarketProvider