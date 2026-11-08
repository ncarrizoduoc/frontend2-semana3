import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from "../assets/img/orange_logo.svg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="relative z-20 bg-gray-100 px-4 py-3">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between">
                <Link to="/" className="inline-flex items-center gap-2 font-semibold text-gray-900">
                    <img
                        src={logo}
                        alt=""
                        width="30"
                        height="30"
                    />
                    <span>Market</span>
                </Link>
                <button
                    className="inline-flex size-10 items-center justify-center rounded text-gray-700 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 lg:hidden"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbar-menu"
                    aria-expanded={isOpen}
                    aria-label="Alternar navegación"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d={isOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
                <div id="navbar-menu" className={`${isOpen ? 'block' : 'hidden'} w-full pt-3 lg:block lg:w-auto lg:pt-0`}>
                    <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
                        <li>
                            <NavLink to="/" end onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded px-3 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-800 hover:bg-gray-200'}`}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/productos" end onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded px-3 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-800 hover:bg-gray-200'}`}>
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nuestras-tiendas" onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded px-3 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-800 hover:bg-gray-200'}`}>
                                Nuestras tiendas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/preguntas-frecuentes" onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded px-3 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-800 hover:bg-gray-200'}`}>
                                Preguntas Frecuentes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/inventario" onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded px-3 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-800 hover:bg-gray-200'}`}>
                                Inventario
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nuevo-articulo" onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded px-3 py-2 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-800 hover:bg-gray-200'}`}>
                                Agregar artículo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar