import { useReducer } from 'react'
import MarketContext from './MarketContext'
import articulosIniciales from '../data/categorias.json'
import {
    crearEstadoInicial,
    reducer,
    TIPOS_ACCION
} from './reducer.js'

function MarketProvider({ children }) {
    const [estado, dispatch] = useReducer(
        reducer,
        articulosIniciales,
        crearEstadoInicial
    )

    const agregarArticulo = (articulo) => {
        const nuevoArticulo = {
            ...articulo,
            id: crypto.randomUUID(),
            categoria: articulo.categoria,
            stock: Number(articulo.stock ?? 0)
        }

        dispatch({
            type: TIPOS_ACCION.AGREGAR_ARTICULO,
            articulo: nuevoArticulo
        })

        return { exito: true }
    }

    const actualizarStock = (id, cantidad) => {
        dispatch({
            type: TIPOS_ACCION.ACTUALIZAR_STOCK,
            id,
            cantidad
        })
    }

    const agregarAlCarrito = (articulo) => {
        dispatch({
            type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
            articulo
        })
    }

    const sustraerDelCarrito = (articulo) => {
        dispatch({
            type: TIPOS_ACCION.SUSTRAER_DEL_CARRITO,
            articulo
        })
    }

    const eliminarDelCarrito = (articulo) => {
        dispatch({
            type: TIPOS_ACCION.ELIMINAR_DEL_CARRITO,
            articulo
        })
    }

    return (
        <MarketContext.Provider value={{
            articulos: estado.articulos,
            carrito: estado.carrito,
            agregarArticulo,
            actualizarStock,
            agregarAlCarrito,
            sustraerDelCarrito,
            eliminarDelCarrito
        }}>
            {children}
        </MarketContext.Provider>
    )
}

export default MarketProvider