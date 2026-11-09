import useMarket from "../hooks/UseMarket"
import CarritoCard from "../components/CarritoCard"
import { Link } from 'react-router'

function Carrito() {
    const { carrito } = useMarket()

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
                <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <ul className="flex flex-col divide-y divide-gray-300 overflow-hidden rounded-md border border-3 border-gray-300">
                            {carrito.map((articulo) => (
                                <CarritoCard key={articulo.id} item={articulo} />
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </>

    )
}

export default Carrito