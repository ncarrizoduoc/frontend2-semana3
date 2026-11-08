import categorias from '../data/categorias.json'

import { Link } from 'react-router'

function Categorias() {
    return (
        <div className="grid grid-cols-1 gap-6 px-4 pb-4 md:grid-cols-3">
                {categorias.map((categoria) => (
                    <article key={categoria.nombre} className="overflow-hidden rounded border-2 border-amber-400 bg-gray-700">
                        <img
                            src={categoria.img}
                            className="block h-[220px] w-full object-cover"
                            alt={`Imagen representativa de ${categoria.nombre}`}
                        />
                        <div className="p-4 text-center">
                            <h3 className="mb-3 text-lg font-semibold text-white">{categoria.nombre}</h3>
                            <Link to="/" className="inline-flex items-center rounded bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                                Explorar
                            </Link>
                        </div>
                    </article>
                ))}
        </div>
    )

}

export default Categorias