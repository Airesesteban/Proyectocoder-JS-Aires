const carritoProductos = recuperarLS()
const URL = "js/articulos.json"
const articulos = []

const guardarEnLocalStorage = ()=> {
    if (carritoProductos.length > 0) {
        localStorage.setItem("miCarrito", JSON.stringify(carritoProductos))
    }
}

function recuperarLS() {
    if (localStorage.getItem("miCarrito")) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}