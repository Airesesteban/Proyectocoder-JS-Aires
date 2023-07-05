const container = document.querySelector('div.container#container')
const inputSearch = document.querySelector('input#inputSearch')

function retornarCard(producto) {
    return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <div class="comprar"><button id="${producto.codigo}" class="button button-outline">Agregar al carrito</button></div>
            </div>`
}

const cargarProductos = (array)=> {
    container.innerHTML = ''
    array.forEach((producto) => {
        container.innerHTML += retornarCard(producto)
    })
    activarClickEnBotones()
}

const filtrarProductos = ()=> {
    let resultado = articulos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (resultado.length > 0) {
        cargarProductos(resultado)
    }
}
inputSearch.addEventListener("keypress", filtrarProductos)

function finalizarCompra() {
    if(carritoProductos.length >0){
    const carroProvisorio = new Compra(carritoProductos)
    let resultado = "El monto total de su carrito es de $" + carroProvisorio.obtenerSubtotal()
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

cargarProductos(articulos)