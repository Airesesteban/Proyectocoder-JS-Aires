const container = document.querySelector('div.container#container')
const inputSearch = document.querySelector('input#inputSearch')

function returnCardHTML(producto) {
    return `<div class="div-card bg-color">
                <div class="prenda"><p>${producto.nombre}</p></div>
                <div class="importe"><p>$ ${producto.precio}</p></div>
                <div class="comprar"><button id="${producto.codigo}" class="button button-outline">Agregar al carrito</button></div>
            </div>`
}            

const filtrarProductos = ()=> {
    let arrayResultado = articulos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}
inputSearch.addEventListener("keypress", filtrarProductos)

function finalizarCompra() {
    if(carritoProductos.length >0){
    const carroProvisorio = new Compra(carritoProductos)
    let resultado = "El total de su carrito provisorio es de $" + carroProvisorio.obtenerSubtotal()
    document.getElementById('carrito').innerHTML = resultado
}
}

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline')
          for (let boton of botones) { 
                boton.addEventListener('click', ()=> { 
                    let prendaElegida = articulos.find((prenda)=> prenda.codigo === parseInt(boton.id))
                    carritoProductos.push(prendaElegida)
                    guardarEnLocalStorage()
                    finalizarCompra()
                })
          }
}

const cargarProductos = (array)=> {
    container.innerHTML = ''
    array.forEach((producto) => {
        container.innerHTML += returnCardHTML(producto)
    })
    activarClickEnBotones()
}


cargarProductos(articulos)

