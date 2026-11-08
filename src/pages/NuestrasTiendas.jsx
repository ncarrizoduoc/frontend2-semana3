import sucursalVespucio from "../assets/img/sucursales/vespucio.jpg";
import sucursalPajaritos from "../assets/img/sucursales/pajaritos.jpg";
import sucursalPuente from "../assets/img/sucursales/puente_alto.jpg";
import sucursalLosLeones from "../assets/img/sucursales/los_leones.jpg";


const tiendas = [
    {
        nombre: "Sucursal Vespucio",
        direccion: "Av. Américo Vespucio 576 - Las Condes",
        img: sucursalVespucio,
        nota : 'Delivery disponible las 24 hrs.'
    },
    {
        nombre: 'Sucursal Pajaritos',
        direccion: 'Av. Pajaritos 3310 - Maipú',
        img: sucursalPajaritos,
        nota: 'Sin servicio Delivery'
    },
    {
        nombre: 'Sucursal Puente Alto',
        direccion: 'Av. Santo Domingo 89 - Puente Alto',
        img: sucursalPuente,
        nota : 'Delivery disponible las 24 hrs.'
    },
    {
        nombre: 'Sucursal Los Leones',
        direccion: 'Av. Los Leones 2523 - Providencia',
        img: sucursalLosLeones,
        nota: 'Delivery disponible de 10:00 a 21:00 hrs.'
    }

]

function NuestrasTiendas() {
    return (
        <section className="mx-auto max-w-6xl px-4 pb-8">
            <h1>Nuestras tiendas</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {tiendas.map((tienda) => (
                    <article key={tienda.nombre} className="overflow-hidden rounded border-2 border-gray-900 bg-white">
                        <img
                            src={tienda.img}
                            className="block h-[220px] w-full object-cover object-center"
                            alt={`Imagen del interior de la sucursal ${tienda.nombre}`}
                        />
                        <div className="p-4">
                            <h2 className="text-gray-900">{tienda.nombre}</h2>
                            <p className="mb-3 text-gray-700">{tienda.direccion}</p>
                            <button className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                                Cómo llegar
                            </button>
                        </div>
                        <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
                            {tienda.nota}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default NuestrasTiendas