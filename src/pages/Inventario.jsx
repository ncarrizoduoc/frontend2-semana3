import useMarket from "../hooks/UseMarket"

function Inventario() {
    const { articulos, actualizarStock } = useMarket()

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-8">
            <header className="mb-6">
                <h1>Inventario</h1>
                <p className="leading-relaxed text-gray-700">La siguiente tabla contiene un listado de todos los productos disponibles en tienda</p>
            </header>
            <div className="overflow-x-auto rounded border border-2 border-gray-400">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm text-gray-800">
                    <thead className="bg-gray-100 text-gray-900">
                        <tr>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">#</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Imagen</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Nombre</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Marca</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Categoría</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articulos.map((articulo, index) => (
                            <tr key={articulo.id ?? `${articulo.nombre}-${index}`} className="odd:bg-white even:bg-gray-50 hover:bg-amber-50">
                                <th className="border border-gray-300 px-4 py-3 align-middle font-medium" scope="row">{index + 1}</th>
                                <td className="border border-gray-300 px-4 py-3 align-middle">
                                    <img
                                        src={articulo.url}
                                        alt={`Imagen del artículo ${articulo.nombre}`}
                                        width="56"
                                        height="56"
                                        className="size-14 rounded object-cover"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-3 align-middle">{articulo.nombre}</td>
                                <td className="border border-gray-300 px-4 py-3 align-middle">{articulo.marca}</td>
                                <td className="border border-gray-300 px-4 py-3 align-middle">{articulo.categoria}</td>
                                <td className="border border-gray-300 px-4 py-3 align-middle">
                                    <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                                        <button
                                            type="button"
                                            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-white text-lg font-medium text-gray-600 shadow-sm transition hover:bg-gray-50 active:scale-95"
                                            aria-label={`Disminuir stock de ${articulo.nombre}`}
                                            disabled={articulo.stock === 0}
                                            onClick={() => actualizarStock(articulo.id, -1)}
                                        >
                                            -
                                        </button>

                                        <span className="inline-block w-6 text-center text-sm font-semibold text-gray-800 select-none">
                                            {articulo.stock}
                                        </span>

                                        <button
                                            type="button"
                                            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-white text-lg font-medium text-gray-600 shadow-sm transition hover:bg-gray-50 active:scale-95"
                                            aria-label={`Aumentar stock de ${articulo.nombre}`}
                                            onClick={() => actualizarStock(articulo.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section >
    )
}

export default Inventario