import useMarket from '../hooks/UseMarket'

function ProductoCard({ articulo }) {
    const { agregarAlCarrito } = useMarket()

    return (
        <div key={articulo.id} className="h-full">
            <article className="flex h-full flex-col rounded border-2 border-gray-400 p-2">
                <div className="flex justify-center">
                    <div className="flex h-40 w-40 items-center justify-center bg-gray-100">
                        <img
                            className="h-full w-full object-cover"
                            src={articulo.url}
                            alt={articulo.nombre}
                        />
                    </div>
                </div>

                <div className="flex flex-1 flex-col px-4 py-4">
                    <p className="mb-2 rounded bg-gray-200 px-2 py-1 text-sm text-gray-800">
                        {articulo.categoria}
                    </p>
                    <p className="text-sm">{articulo.marca}</p>
                    <p className="mb-3 text-xl font-bold">{articulo.nombre}</p>
                    <p className="mb-2 text-sm text-gray-500">Stock: {articulo.stock}</p>
                    <p className="mt-auto text-lg font-semibold text-gray-700">
                        ${articulo.precio}
                    </p>
                </div>

                <div className="mt-auto flex flex-col gap-2 px-4 pb-2">
                    <button className="rounded-full bg-black hover:bg-gray-700 px-3 py-2 text-sm font-semibold text-white">
                        Ver detalle
                    </button>
                    <button
                        onClick={() => agregarAlCarrito(articulo)}
                        className="rounded-full bg-amber-400 hover:bg-amber-500 px-3 py-2 text-sm font-semibold text-gray-700"
                    >
                        Agregar al carro
                    </button>
                </div>
            </article>
        </div>
    )
}

export default ProductoCard