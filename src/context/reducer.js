export const TIPOS_ACCION = {
    AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
    AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
    SUSTRAER_DEL_CARRITO: 'SUSTRAER_DEL_CARRITO',
    ACTUALIZAR_STOCK: 'ACTUALIZAR_STOCK',
    ELIMINAR_DEL_CARRITO: 'ELIMINAR_DEL_CARRITO'
}

function cargarArticulos(articulosIniciales) {
    const articulos = []

    articulosIniciales.forEach((categoria) => {
        categoria.productos.forEach((articulo) => {
            articulos.push({
                ...articulo,
                id: crypto.randomUUID(),
                categoria: categoria.nombre,
                stock: Number(articulo.stock ?? 0)
            })
        })
    })

    return articulos
}

export function crearEstadoInicial(articulosIniciales) {
    return {
        articulos: cargarArticulos(articulosIniciales),
        carrito: []
    }
}

export function reducer(estado, accion) {
    switch (accion.type) {
        case TIPOS_ACCION.AGREGAR_ARTICULO: {
            return {
                ...estado,
                articulos: [...estado.articulos, accion.articulo]
            }
        }

        case TIPOS_ACCION.AGREGAR_AL_CARRITO: {
            const articuloEnInventario = estado.articulos.find(
                (item) => item.id === accion.articulo.id
            )

            // Si el artículo no está en el inventario o no hay stock, no se agrega al carrito
            if (!articuloEnInventario) {
                return estado
            }

            if (articuloEnInventario.stock <= 0) {
                return estado
            }

            // Se busca el artículo en el carrito
            const articuloEnCarrito = estado.carrito.find(
                (item) => item.id === accion.articulo.id
            )

            // Se actualiza el stock en el inventario y se agrega al carrito
            // Si ya estaba en el carrito, se incrementa la cantidad del artículo en el carrito
            return {
                ...estado,
                articulos: estado.articulos.map((articulo) =>
                    articulo.id === accion.articulo.id
                        ? { ...articulo, stock: Math.max(0, Number(articulo.stock) - 1) }
                        : articulo
                ),
                carrito: articuloEnCarrito
                    ? estado.carrito.map((item) =>
                        item.id === accion.articulo.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    )
                    : [...estado.carrito, { ...accion.articulo, cantidad: 1 }]
            }
        }

        case TIPOS_ACCION.SUSTRAER_DEL_CARRITO: {
            const articuloEnCarrito = estado.carrito.find((item) => item.id === accion.articulo.id)

            if (!articuloEnCarrito) {
                return estado
            }

            if (articuloEnCarrito.cantidad > 1) {
                return {
                    ...estado,
                    articulos: estado.articulos.map((articulo) =>
                        articulo.id === accion.articulo.id
                            ? { ...articulo, stock: Number(articulo.stock) + 1 }
                            : articulo
                    ),
                    carrito: estado.carrito.map((item) =>
                        item.id === accion.articulo.id ? { ...item, cantidad: item.cantidad - 1 } : item
                    )
                }
            }

            return {
                ...estado,
                articulos: estado.articulos.map((articulo) =>
                    articulo.id === accion.articulo.id
                        ? { ...articulo, stock: Number(articulo.stock) + Number(articuloEnCarrito.cantidad) }
                        : articulo
                ),
                carrito: estado.carrito.filter((item) => item.id !== accion.articulo.id)
            }
        }

        case TIPOS_ACCION.ACTUALIZAR_STOCK: {
            return {
                ...estado,
                articulos: estado.articulos.map((articulo) =>
                    articulo.id === accion.id
                        ? { ...articulo, stock: Math.max(0, Number(articulo.stock) + Number(accion.cantidad)) }
                        : articulo
                )
            }
        }

        case TIPOS_ACCION.ELIMINAR_DEL_CARRITO: {
            const articuloEnCarrito = estado.carrito.find((item) => item.id === accion.articulo.id)

            if (!articuloEnCarrito) {
                return estado
            }

            return {
                ...estado,
                articulos: estado.articulos.map((articulo) =>
                    articulo.id === accion.articulo.id
                        ? { ...articulo, stock: Number(articulo.stock) + Number(articuloEnCarrito.cantidad) }
                        : articulo
                ),
                carrito: estado.carrito.filter((item) => item.id !== accion.articulo.id)
            }
        }

        default:
            return estado
    }
}