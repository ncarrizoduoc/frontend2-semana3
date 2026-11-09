import useMarket from "../hooks/UseMarket"
import CarritoCard from "../components/CarritoCard"
import { Link } from 'react-router'
import { resumenCarrito } from "../util/ResumenCarrito.js"

function Carrito() {
    const { carrito } = useMarket()
    const { cantidadProductos, subtotalProductos } = resumenCarrito(carrito)

    return (
        <>
            <div>
                <h1>Carrito</h1>
            </div>

            {carrito.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 p-6">
                    <p>El carrito está vacío.</p>
                    <Link to="/productos" className="bg-gray-700 hover:bg-black text-white font-bold py-2 px-4 rounded">
                        Explorar productos
                    </Link>
                </div>
            ) : (
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 p-4 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <ul className="flex flex-col divide-y divide-gray-300 overflow-hidden rounded-md border border-3 border-gray-300">
                            {carrito.map((articulo) => (
                                <CarritoCard key={articulo.id} item={articulo} />
                            ))}
                        </ul>
                    </div>
                    <div className="self-start items-start lg:col-span-4 bg-gray-100 rounded-md border border-3 border-gray-300 p-4 divide-y-2 divide-gray-500">
                        <h2>Resumen del carrito:</h2>
                        <div className="mt-4 flex flex-col gap-2 items-start divide-y divide-gray-300">
                            <p>Cantidad de productos: {cantidadProductos}</p>
                            <p className="font-bold text-lg">Subtotal: ${subtotalProductos}</p>
                            <button className="bg-black text-white rounded rounded-2 px-4 py-2">Proceder al pago</button>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default Carrito