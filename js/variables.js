const guardarEnLocalStorage = ()=> {
    if (carritoProductos.length > 0) {
        localStorage.setItem('miCarrito', JSON.stringify(carritoProductos))
    }
}

function recuperarLS() {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}
const carritoProductos = recuperarLS()

const articulos =  [{nombre: 'Buzo bebe botones caramelo', codigo: 1,  precio: 6500},
                    {nombre: 'Body boton blanco', codigo: 2, precio: 3500},
                    {nombre: 'Short verde agua', codigo: 3, precio: 2800},
                    {nombre: 'Leggin bebe caramelo', codigo: 4, precio: 3600},
                    {nombre: 'Vestido gala bolados rosa', codigo: 5, precio: 3500},
                    {nombre: 'Dormilon rosa con cierre', codigo: 6, precio: 5000},
                    {nombre: 'Body puercoespin verde militar', codigo: 7, precio: 3900},
                    {nombre: 'Buzo bebe pitucones gris', codigo: 8, precio: 3200},
                    {nombre: 'Vestido gaza bolados azul', codigo: 9, precio: 3500}]