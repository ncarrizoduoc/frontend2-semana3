import frutas from '../assets/img/frutas.jpg'
import Categorias from '../components/Categorias'
import { Link } from 'react-router'

function Inicio() {
    return (
        <div>
            <header className="mt-4 mb-12">
                <div className="mx-auto mb-4 flex max-w-6xl flex-col items-center justify-center gap-6 px-4 md:flex-row">
                    <div className="w-full text-left md:mr-3">
                        <h1>Bienvenido a Market</h1>
                        <p>¡El supermercado más conveniente de Chile!</p>
                    </div>
                    <article className="grid w-full max-w-[540px] overflow-hidden rounded border-2 border-gray-200 bg-white shadow-sm md:grid-cols-[1fr_2fr]">
                        <img
                            src={frutas}
                            className="block h-[180px] w-full object-cover md:h-full md:min-h-[240px]"
                            alt="Imagen de frutas"
                        />
                        <div className="flex flex-col justify-center items-center bg-gray-50 p-5">
                            <h2 className="text-gray-900">Conoce nuestro catálogo</h2>
                            <p className="mb-3 text-gray-700">
                                Trabajamos para ofrecerte los mejores productos del mercado a precios insuperables.
                            </p>
                            <Link to="/productos" className="inline-flex w-fit items-center rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                                Explorar productos
                            </Link>
                        </div>
                    </article>
                </div>
            </header>
            <section className="bg-gray-900 py-8">
                <h2 className="text-white mb-4">
                    Explora productos por categoría
                </h2>
                <Categorias />
            </section>
        </div>
    )

}

export default Inicio