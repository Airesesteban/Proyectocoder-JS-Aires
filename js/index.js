const container = document.querySelector('#container')
const inputSearch = document.querySelector('#inputSearch')

function retornarCard(producto) {
    return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <div class="comprar"><button id="${producto.codigo}" class="button button-outline">Agregar al carrito</button></div>
            </div>`
}

const cargarProductos = (array = articulos)=> {
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
inputSearch.addEventListener("input", filtrarProductos)

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline')
          for (let boton of botones) { 
                boton.addEventListener('click', ()=> { 
                    let prendaElegida = articulos.find((prenda)=> parseInt(prenda.codigo) === parseInt(boton.id))
                        carritoProductos.push(prendaElegida)
                        guardarEnLocalStorage()
                        notificar(`El articulo "${prendaElegida.nombre}" se agregó al carrito.`)
                })
          }
}
function notificar(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3500,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "#624A8A",
          color: "white"
        }
      }).showToast();
}

function extraerProductos() {
    fetch(URL)
        .then((response)=> response.json())
        .then((data)=> articulos.push(...data))
        .then(()=>cargarProductos())
}
extraerProductos()