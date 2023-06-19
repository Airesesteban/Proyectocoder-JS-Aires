const container = document.querySelector('div.container#container')
const inputSearch = document.querySelector('input#inputSearch')

function retornoCardHTML(producto) {
    return `<div class="div-card">
                <div class="prenda"><p>${producto.nombre}</p></div>
                <div class="importe"><p>$ ${producto.precio}</p></div>
                <div class="comprar"><button id="${producto.codigo}" class="button button-outline">add</button></div>
            </div>`
}
 
function retornoCardError() {
    return `<div class="card-error">
                <h2>🔍</h2>
                <h2>Houston, tenemos un problema.</h2>
                <h3>No encontramos productos para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
}

/* const armarFila = (carritoProductos) =>{
     return `<tr>
     <td class="class-table-number">${prod.codigo}</td>
     <td>${prod.nombre}</td>
     <td>$ ${prod.precio}</td>
 </tr>`
}
const cargarCarrito = (carritoProductos)=> {
    tableBody.innerHTML = ''
    array.forEach((producto) => {
        tableBody.innerHTML += armarFila(carritoProductos)
    })
} */
const filtrarProductos = ()=> {
    let arrayResultado = articulos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}
inputSearch.addEventListener("keypress", filtrarProductos)

const cargarProductos = (array)=> {
    container.innerHTML = ''
    array.forEach((producto) => {
        container.innerHTML += retornoCardHTML(producto)
    })
    activarClickEnBotones()
}

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline')
          for (let boton of botones) { 
                boton.addEventListener('click', ()=> { 
                    let prendaElegida = articulos.find((prenda)=> prenda.codigo === parseInt(boton.id))
                    carritoProductos.push(prendaElegida)
                    guardarEnLocalStorage()
                })
          }
}

cargarProductos(articulos)

