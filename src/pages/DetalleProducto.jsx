import { Link, useParams } from 'react-router'
import useMarket from '../hooks/UseMarket'

function DetalleProducto() {
    const { id } = useParams()
    const { articulos, agregarAlCarrito } = useMarket()

    const articulo = articulos.find((articulo) => String(articulo.id) === String(id))

    if (!articulo) {
        return (
            <>
                <div className="flex flex-col items-center justify-center gap-4 p-6">
                    <h1>Producto no encontrado</h1>
                    <p>No encontramos el producto que buscabas, pero te invitamos a explorar nuestro catálogo.</p>
                    <Link to="/productos" className="bg-gray-700 hover:bg-black text-white font-bold py-2 px-4 rounded">
                        Explorar productos
                    </Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="mx-auto w-full max-w-6xl p-4">
                    <Link
                        to="/productos"
                        className="mb-4 block w-fit rounded bg-gray-700 px-3 py-2 text-white hover:bg-black"
                    >
                        Volver a productos
                    </Link>
                    <div className="w-full lg:flex">
                        <img
                            className="h-64 w-full object-cover rounded-t lg:h-auto lg:w-1/2 lg:rounded-t-none lg:rounded-l"
                            src={articulo.url}
                            alt={`Imagen de ${articulo.nombre}`}
                            title={articulo.nombre} />
                        <div className="flex flex-1 flex-col justify-between border-r border-b border-l border-gray-400 divide-y-2 divide-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400 gap-4">
                            <div className="flex flex-col mb-8 text-start gap-2">
                                <div className="flex w-full items-center justify-between">
                                    <p className="text-sm text-gray-600 flex bg-gray-200 rounded-md px-2 py-1">
                                        {articulo.categoria}
                                    </p>
                                    <p className="font-light text-gray-600">{articulo.stock} en stock</p>
                                </div>
                                <div className="text-gray-900 font-bold text-4xl mb-2">{articulo.nombre}</div>
                                <p className="text-gray-700 text-base">{articulo.marca}</p>
                            </div>
                            <div className="flex flex-1 flex-col justify-between text-start">
                                <p>{articulo.descripcion}</p>
                                <p className="font-bold text-3xl">${articulo.precio}</p>
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    onClick={() => agregarAlCarrito(articulo)}
                                    className="rounded bg-gray-700 hover:bg-black text-white font-bold leading-none px-4 py-3"
                                >
                                    Agregar al carro
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DetalleProducto