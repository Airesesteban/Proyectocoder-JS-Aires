const carrito = []
const articulos = [{codigo: 1, tipo: 'Buzo bebe botones caramelo', precio: 6500},
{ codigo: 2, tipo: 'Body boton blanco', precio: 3500},
{codigo: 3, tipo: 'Short verde agua', precio: 2800},
{codigo: 4, tipo: 'Leggin bebe caramelo', precio: 3600},
{codigo: 5, tipo: 'Vestido gala bolados rosa', precio: 3500},
{codigo: 6, tipo: 'Dormilon rosa con cierre', precio: 5000},
{codigo: 7, tipo: 'Body puercoespin verde militar', precio: 3900},
{codigo: 8, tipo: 'Buzo bebe pitucones gris', precio: 3200},
{codigo: 9, tipo: 'Vestido gaza bolados azul', precio: 3500}]


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
        alert("codigo: 1, tipo: 'Buzo bebe botones caramelo', precio: 6500 , codigo: 2, tipo: 'Body boton blanco', precio: 3500 , codigo: 3, tipo: 'Short verde agua', precio: 2800, codigo: 4, tipo: 'Leggin bebe caramelo', precio: 3600, codigo: 5, tipo: 'Vestido gala bolados rosa', precio: 3500, codigo: 6, tipo: 'Dormilon rosa con cierre', precio: 5000, codigo: 7, tipo: 'Body puercoespin verde militar', precio: 3900, codigo: 8, tipo: 'Buzo bebe pitucones gris', precio: 3200, codigo: 9, tipo: 'Vestido gaza bolados azul', precio: 3500")   
        comprar()
    }

}

function comprar(){
    let codigo = prompt("Ingresa el codigo (del 1 al 9) de tu articulo de interes")
    let articuloSeleccionado = buscarArticuloPorCodigo(codigo)
    if(articuloSeleccionado !== undefined){
        carrito.push(articuloSeleccionado)
        alert(articuloSeleccionado.tipo + " se agrego a tu carrito")
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