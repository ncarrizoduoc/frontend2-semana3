import useMarket from "../hooks/UseMarket"

function Inventario() {
    const { articulos } = useMarket()

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-8">
            <header className="mb-6">
                <h1>Inventario</h1>
                <p className="leading-relaxed text-gray-700">La siguiente tabla contiene un listado de todos los productos disponibles en tienda</p>
            </header>
            <div className="overflow-x-auto rounded border border-gray-300">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm text-gray-800">
                    <thead className="bg-gray-100 text-gray-900">
                        <tr>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">#</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Imagen</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Nombre</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Marca</th>
                            <th className="border border-gray-300 px-4 py-3 font-semibold" scope="col">Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articulos.map((articulo, index) => (
                            <tr key={articulo.id ?? `${articulo.nombre}-${index}`} className="even:bg-gray-50 hover:bg-amber-50">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Inventario