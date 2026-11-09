import { useState } from 'react'
import categorias from '../data/categorias.json'
import { validarArticulo } from '../util/ValidarArticulo'
import useMarket from '../hooks/UseMarket'

const getInputClassName = (isValid) => `mt-1 block w-full rounded border bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 ${isValid ? 'border-gray-300 focus:border-amber-500 focus:ring-amber-200' : 'border-red-600 focus:border-red-600 focus:ring-red-200'}`

// Formulario para agregar un nuevo artículo al inventario
function NuevoArticuloForm() {

    const { agregarArticulo } = useMarket()

    // Variables para campos del form
    const [articulo, setArticulo] = useState({
        nombre: '',
        marca: '',
        url: '',
        categoria: '',
        stock: '0',
        precio: '0',
        descripcion: ''
    })

    // Variables para validez de campos del form
    const [validez, setValidez] = useState({
        nombre: true,
        marca: true,
        url: true,
        categoria: true,
        stock: true,
        precio: true,
        descripcion: true
    })

    // Handler que actualiza valores del formulario cada vez que se modifiquen
    const handleChange = (event) => {
        const { id, value } = event.target
        setArticulo((prev) => ({ ...prev, [id]: value }))
    }

    // Reiniciar valores del formulario y booleanos de validacion
    const limpiarFormulario = () => {
        setArticulo({
            nombre: '',
            marca: '',
            url: '',
            categoria: '',
            stock: '0',
            precio: '0',
            descripcion: true
        })
        setValidez({
            nombre: true,
            marca: true,
            url: true,
            categoria: true,
            stock: true,
            precio: true,
            descripcion: true
        })
    }

    // Funcion para enviar el formulario (primero valida los datos y luego crea el nuevo artículo)
    const submitForm = (event) => {
        event.preventDefault()

        // Si los datos son validos, se agrega el articulo.
        // Si no, se muestran los invalid-feedback que correspondan
        const formularioValido = validarArticulo(articulo)
        if (Object.values(formularioValido).every(Boolean)) {
            agregarArticulo(articulo)
            alert("Se ha agregado el producto al inventario")
            limpiarFormulario()
        } else {
            setValidez(formularioValido)
        }
    }

    return (
        <section>
            <form className="mx-auto w-full max-w-5xl space-y-4 rounded border border-2 border-amber-400 bg-gray-100 p-4 text-left" onSubmit={submitForm}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">Nombre:</label>
                        <input
                            type="text"
                            value={articulo.nombre}
                            className={getInputClassName(validez.nombre)}
                            id="nombre"
                            placeholder="Nombre del producto"
                            aria-invalid={!validez.nombre}
                            aria-describedby={!validez.nombre ? 'articuloNombreFeedback' : undefined}
                            onChange={handleChange}
                        />
                        {!validez.nombre && <p id="articuloNombreFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes ingresar un nombre (no más de 150 caracteres).</p>}
                    </div>
                    <div>
                        <label htmlFor="marca" className="block text-sm font-medium text-gray-800">Marca:</label>
                        <input
                            type="text"
                            value={articulo.marca}
                            className={getInputClassName(validez.marca)}
                            id="marca"
                            placeholder="Marca del producto"
                            aria-invalid={!validez.marca}
                            aria-describedby={!validez.marca ? 'articuloMarcaFeedback' : undefined}
                            onChange={handleChange}
                        />
                        {!validez.marca && <p id="articuloMarcaFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes ingresar una marca (no más de 50 caracteres).</p>}
                    </div>
                    <div>
                        <label htmlFor="url" className="block text-sm font-medium text-gray-800">URL de la imagen:</label>
                        <input
                            type="text"
                            value={articulo.url}
                            className={getInputClassName(validez.url)}
                            id="url"
                            aria-invalid={!validez.url}
                            aria-describedby={!validez.url ? 'articuloUrlFeedback' : undefined}
                            onChange={handleChange}
                        />
                        {!validez.url && <p id="articuloUrlFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes ingresar una URL válida.</p>}
                    </div>
                    <div>
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-800">Categoría:</label>
                        <select
                            value={articulo.categoria}
                            className={getInputClassName(validez.categoria)}
                            id="categoria"
                            aria-invalid={!validez.categoria}
                            aria-describedby={!validez.categoria ? 'articuloCategoriaFeedback' : undefined}
                            onChange={handleChange}
                        >
                            <option disabled value="">Seleccione una categoría:</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.nombre}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                        {!validez.categoria && <p id="articuloCategoriaFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes seleccionar una categoría.</p>}
                    </div>
                    <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-800">Stock:</label>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={articulo.stock}
                            className={getInputClassName(validez.stock)}
                            id="stock"
                            aria-invalid={!validez.stock}
                            aria-describedby={!validez.stock ? 'articulostockFeedback' : undefined}
                            onChange={handleChange}
                        />
                        {!validez.stock && <p id="articulostockFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes ingresar un stock válido (mayor o igual a 0).</p>}
                    </div>
                    <div>
                        <label htmlFor="precio" className="block text-sm font-medium text-gray-800">Precio:</label>
                        <input
                            type="number"
                            min="0"
                            step="10"
                            value={articulo.precio}
                            className={getInputClassName(validez.precio)}
                            id="precio"
                            aria-invalid={!validez.precio}
                            aria-describedby={!validez.precio ? 'articuloPrecioFeedback' : undefined}
                            onChange={handleChange}
                        />
                        {!validez.precio && <p id="articuloPrecioFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes ingresar un precio válido (mayor a 0).</p>}
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-800">
                            Descripción del producto:
                        </label>
                        <textarea
                            id="descripcion"
                            rows={4}
                            maxLength={1000}
                            placeholder="Ingrese una descripción detallada del producto (máx. 1000 caracteres)"
                            value={articulo.descripcion}
                            className={getInputClassName(validez.descripcion)}
                            aria-invalid={!validez.descripcion}
                            aria-describedby={!validez.descripcion ? 'articuloDescripcionFeedback' : undefined}
                            onChange={handleChange}
                        />
                        {!validez.descripcion && <p id="articuloDescripcionFeedback" role="alert" className="mt-1 text-sm text-red-700">Debes ingresar una descripción (de hasta 1000 caracteres).</p>}

                    </div>
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                    <button type="submit" className="w-full rounded bg-amber-400 px-4 py-2 font-semibold text-gray-900 hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 sm:w-auto">
                        Agregar artículo
                    </button>
                    <button type="button" className="w-full rounded bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 sm:w-auto" onClick={limpiarFormulario}>
                        Limpiar formulario
                    </button>
                </div>
            </form>
        </section>

    )
}

export default NuevoArticuloForm