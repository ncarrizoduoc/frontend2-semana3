import instagramLogo from "../assets/img/instagram-logo-facebook-2-svgrepo-com.svg";
import twitterLogo from "../assets/img/twitter-154-svgrepo-com.svg";
import facebookLogo from "../assets/img/facebook-svgrepo-com.svg";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="bg-gray-100 p-4 font-light text-gray-900">
            <div className="w-full text-left">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-4">
                    <section className="min-w-0 border-b border-gray-400 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                        <h4 className="mb-2 text-base font-light">Datos de contacto</h4>
                        <div>
                            <p>Teléfono: 999999999</p>
                            <p>Correo: contacto@market.cl</p>
                        </div>
                    </section>
                    <section className="min-w-0 border-b border-gray-400 pb-4 sm:border-b-0 sm:pr-4 md:border-r">
                        <h4 className="mb-2 text-base font-light">Horario de atención</h4>
                        <div>
                            <p>Lun a dom: 09:00 a 21:00</p>
                        </div>
                    </section>
                    <section className="min-w-0 border-b border-gray-400 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                        <h4 className="mb-2 text-base font-light">Nuestras tiendas</h4>
                        <Link to="/nuestras-tiendas" className="inline-flex items-center rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                            Ver sucursales
                        </Link>
                    </section>
                    <section className="min-w-0">
                        <h4 className="mb-2 text-base font-light">Nuestras redes sociales</h4>
                        <ul className="flex w-full list-none items-center gap-3">
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <img
                                        src={instagramLogo}
                                        alt="Instagram"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <img
                                        src={twitterLogo}
                                        alt="Twitter"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <img
                                        src={facebookLogo}
                                        alt="Facebook"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <p className="pt-3 italic">@Market. Todos los derechos reservados</p>
            </div>
        </footer>

    )
}

export default Footer