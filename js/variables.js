const carritoProductos = recuperarLS()
const articulos =  [{nombre: 'Buzo bebe botones caramelo', codigo: 1,  precio: 6500, imagen:'images/buzo_bebe_botones_caramelo.webp'},
                    {nombre: 'Body boton blanco', codigo: 2, precio: 3500, imagen:'images/body_boton_blanco.webp'},
                    {nombre: 'Short verde agua', codigo: 3, precio: 2800, imagen:'images/short_verde_agua.webp'},
                    {nombre: 'Leggin bebe caramelo', codigo: 4, precio: 3600, imagen:'images/leggin_bebe_caramelo.webp'},
                    {nombre: 'Vestido gala bolados rosa', codigo: 5, precio: 3500, imagen:'images/vestido_rosa_bolados.webp'},
                    {nombre: 'Dormilon rosa con cierre', codigo: 6, precio: 5000, imagen:'images/dormilon_rosa_con_cierre.webp'},
                    {nombre: 'Body puercoespin verde militar', codigo: 7, precio: 3900, imagen:'images/body_puercoespin_verde_militar.webp'},
                    {nombre: 'Buzo bebe pitucones gris', codigo: 8, precio: 3200, imagen:'images/buzo_bebe_pitucones_gris.webp'},
                    {nombre: 'Vestido gaza bolados azul', codigo: 9, precio: 3500, imagen:'images/vestido_gaza_bolados_azul.webp'}]

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