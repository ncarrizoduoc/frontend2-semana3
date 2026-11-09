import NuevoArticuloForm from "../components/NuevoArticuloForm"


function NuevoArticulo(){
    return(
        <div className="my-12">
            <div className="mx-auto mb-4 w-full max-w-5xl px-4">
                <h1>Agregar artículo</h1>
                <p>Rellena el siguiente formulario para agregar un nuevo artículo al inventario</p>
            </div>
            <NuevoArticuloForm />
        </div>
    )
}

export default NuevoArticulo