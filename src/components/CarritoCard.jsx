import useMarket from "../hooks/UseMarket"

function CarritoCard({ item }) {
    const { eliminarDelCarrito,  agregarAlCarrito, sustraerDelCarrito} = useMarket()

    return (
        <div className="w-full">
            <div className="flex w-full overflow-hidden bg-white shadow-sm">
                <div className="flex w-32 shrink-0 items-center justify-center overflow-hidden bg-white md:w-40">
                    <img
                        className="h-32 w-32 object-cover md:h-40 md:w-40 p-3"
                        src={item.url}
                        alt={item.nombre}
                        title={item.nombre}
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                    <div className="flex flex-col items-start text-left">
                        <p className="mb-2 inline-block rounded bg-amber-400 px-2 py-1 text-sm text-gray-800">
                            {item.marca}
                        </p>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">{item.nombre}</h3>
                        <p className="text-base text-gray-700">${item.precio}</p>
                    </div>

                    <div className="mt-4 flex items-center gap-7">
                        <div className="flex items-center gap-1">
                            <p>Cantidad:</p>
                            <button
                                type="button"
                                className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-white text-lg font-medium text-gray-600 border border-2 border-gray-300 transition hover:bg-gray-50 active:scale-95"
                                aria-label={`Disminuir cantidad de ${item.nombre} en el carrito`}
                                disabled={item.cantidad === 0}
                                onClick={() => sustraerDelCarrito(item)}
                            >
                                -
                            </button>

                            <span className="inline-block w-6 text-center text-md font-semibold text-gray-800 select-none">
                                {item.cantidad}
                            </span>

                            <button
                                type="button"
                                className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-white text-lg font-medium text-gray-600 border border-2 border-gray-300 transition hover:bg-gray-50 active:scale-95"
                                aria-label={`Aumentar cantidad de ${item.nombre} en el carrito`}
                                onClick={() => agregarAlCarrito(item)}
                            >
                                +
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() => eliminarDelCarrito(item)}
                            className="rounded border border-gray-300 bg-red-700 text-white px-3 py-2 text-sm font-semibold hover:bg-gray-100"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoCard