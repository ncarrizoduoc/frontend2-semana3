export function resumenCarrito(carrito){
    var cantidadProductos = 0
    var subtotalProductos = 0

    carrito.forEach((item) => {
        cantidadProductos += item.cantidad
        subtotalProductos += item.precio * item.cantidad
    })

    return {cantidadProductos, subtotalProductos}
}