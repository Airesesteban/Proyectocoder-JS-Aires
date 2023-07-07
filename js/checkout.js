const grid = document.querySelector("#containerGrid")

function checkoutProduct(carritoProducto) {
    return `<div class="containerGrid">
            <img class="card-img-top" src="${carritoProducto.imagen}">
            <div class="producto"><p>${carritoProducto.nombre}</p></div>
            <div class="codigo"><p>${carritoProducto.codigo}</p></div>
            <div class="precio"><p>${carritoProducto.precio}</p></div>
            </div>`
}

if (carritoProductos.length > 0) {
    carritoProductos.forEach((carritoProducto) => {
        grid.innerHTML += checkoutProduct(carritoProducto)
    })
}

const compraCorrecta = () => {
    Swal.fire({
        title: 'Gracias por su compra!',
        text: 'Puedes volver a la pagina principal para seguir viendo nuestros productos',
        icon: 'success',
        confirmButtonText: '✔'
      })
      localStorage.clear();
}
const boton=document.querySelector('#btnComprar')
boton.addEventListener('click', compraCorrecta)

function agregarItemACarrito() {
    if(carritoProductos.length >0){
    const carroProvisorio = new Compra(carritoProductos)
    let resultado = "El monto total de su carrito es de $" + carroProvisorio.obtenerSubtotal()
    document.getElementById('carrito').innerHTML = resultado
    }
}

agregarItemACarrito()