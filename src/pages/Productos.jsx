import useMarket from "../hooks/UseMarket"
import { useState } from 'react'
import CATEGORIAS from '../data/categorias.json'

function Productos() {
    const { articulos } = useMarket()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

    const articulosFiltrados =
        categoriaSeleccionada === 'Todas'
            ? articulos
            : articulos.filter((articulo) => articulo.categoria === categoriaSeleccionada)

    return (
        <>
            <section className="flex flex-col gap-6 p-6">
                <div className="flex flex-col items-center">
                    <h1>Nuestros Productos</h1>
                    <p>Explora el listado completo de productos o filtra por categoría</p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <p>Filtrar por categoría:</p>
                    <select
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                        className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Todas">Todas</option>
                        {CATEGORIAS.map((categoria) => (
                            <option key={categoria.nombre} value={categoria.nombre}>
                                {categoria.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {articulosFiltrados.map((articulo) => (
                        <div className="max-w-sm rounded overflow-hidden border-2 border-amber-400 rounded-lg w-full p-2" >
                            <div>

                            </div>
                            <div className="flex justify-center">
                                <div className="flex items-center justify-start h-40 w-40 bg-gray-100">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={articulo.url}
                                        alt={articulo.nombre}
                                    />
                                </div>
                            </div>
                            <div className="px-6 py-4 flex flex-col">
                                <p className="text-gray-800 text-sm bg-gray-200 py-2 mb-3 rounded-lg">{articulo.categoria}</p>
                                <p className="text-sm">{articulo.marca}</p>
                                <p className="font-bold text-xl mb-3">{articulo.nombre}</p>
                                <p className="font-semibold text-gray-700 text-lg">${articulo.precio}</p>
                            </div>
                            <div className="flex flex-col gap-2 px-6 pt-2 pb-2">
                                <span className="inline-block bg-black rounded-full px-3 py-2 text-sm font-semibold text-white mr-2 mb-2">Ver detalle</span>
                                <span className="inline-block bg-amber-400 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 ">Agregar al carro</span>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </>
    )

}

export default Productos