const grid = document.querySelector("#containerGrid")

function checkoutProduct(carritoProducto) {
    return `<div class="containerGrid">
            <div class="Producto"><p>${carritoProducto.nombre}</p></div>
            <div class="Codigo"><p>${carritoProducto.codigo}</p></div>
            <div class="Precio"><p>${carritoProducto.precio}</p></div>
            </div>`
}

if (carritoProductos.length > 0) {
    console.log(grid)
    console.log(carritoProductos)
    carritoProductos.forEach((carritoProducto) => {
        grid.innerHTML += checkoutProduct(carritoProducto)
    })
}

const compraCorrecta = () => {
    Swal.fire({
        title: 'Gracias por su compra!',
        text: 'Lo esperamos para su proxima compra',
        icon: 'success',
        confirmButtonText: '✔'
      })
}
const boton=document.querySelector('#btnComprar')
boton.addEventListener('click', compraCorrecta)

