const productos = ["teclado", "mouse", "pantalla"];

function agregarProducto(lista, nuevoProducto) {
    return [...lista, nuevoProducto];
}

const productosActualizados = agregarProducto(productos, "audifonos");
console.log();


