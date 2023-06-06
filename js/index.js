const carrito = []
const articulos = [{nombre: 'Buzo bebe botones caramelo', codigo: 1,  precio: 6500},
{nombre: 'Body boton blanco', codigo: 2, precio: 3500},
{nombre: 'Short verde agua', codigo: 3, precio: 2800},
{nombre: 'Leggin bebe caramelo', codigo: 4, precio: 3600},
{nombre: 'Vestido gala bolados rosa', codigo: 5, precio: 3500},
{nombre: 'Dormilon rosa con cierre', codigo: 6, precio: 5000},
{nombre: 'Body puercoespin verde militar', codigo: 7, precio: 3900},
{nombre: 'Buzo bebe pitucones gris', codigo: 8, precio: 3200},
{nombre: 'Vestido gaza bolados azul', codigo: 9, precio: 3500}]


function buscarArticuloPorCodigo(codigo){
    let resultado = articulos.find((articulo)=> articulo.codigo === parseInt(codigo) )
    return resultado
}

function finalizarOperacion(){
    const compra = new Compra(carrito)
    alert ("El costo total de tu compra por " + carrito.length + " articulo/s es $" + compra.obtenerSubtotal() + " ,si abona de contado el precio final es $" + (compra.obtenerSubtotal()*0.9))
}

function SeleccionDeOpcion(){
    let respuesta = confirm("Presione ACEPTAR si ya sabe el codigo del producto, o CANCELAR para ver la lista de artículos disponibles")
    if (respuesta === true){
        comprar()
    } else {
        alert("codigo: 1,'Buzo bebe botones caramelo', precio: $6500 , codigo: 2,'Body boton blanco', precio: $3500 , codigo: 3,'Short verde agua', precio: $2800, codigo: 4,'Leggin bebe caramelo', precio: $3600, codigo: 5,'Vestido gala bolados rosa', precio: $3500, codigo: 6,'Dormilon rosa con cierre', precio: $5000, codigo: 7,'Body puercoespin verde militar', precio: $3900, codigo: 8,'Buzo bebe pitucones gris', precio: $3200, codigo: 9,'Vestido gaza bolados azul', precio: $3500")   
        comprar()
    }

}

function comprar(){
    let codigo = prompt("Ingresa el codigo (del 1 al 9) de tu articulo de interes")
    let articuloSeleccionado = buscarArticuloPorCodigo(codigo)
    if(articuloSeleccionado !== undefined){
        carrito.push(articuloSeleccionado)
        alert(articuloSeleccionado.nombre + " se agrego a tu carrito")
        let respuesta = confirm("¿Desea agregar otra prenda a su carrito?")
        if (respuesta === true){
            comprar()
        } else {
            finalizarOperacion()
        }
    } else {
        alert("Error en el codigo ingresado. Refresca la pagina para comenzar de nuevo por favor" )
    }
}
SeleccionDeOpcion()