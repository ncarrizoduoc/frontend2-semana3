import useMarket from "../hooks/UseMarket"
import { useState } from 'react'
import CATEGORIAS from '../data/categorias.json'
import ProductoCard from "../components/ProductoCard"

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
                        <ProductoCard
                            key={articulo.id ?? `${articulo.nombre}-${articulo.categoria}`}
                            articulo={articulo}
                        />
                    ))}

                </div>
            </section>

        </>
    )

}

export default Productos