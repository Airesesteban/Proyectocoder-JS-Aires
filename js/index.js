const carrito = []
const articulos = [{imagen: , codigo: 1, tipo: 'Buzo bebe botones caramelo', precio: 6500},
{imagen: , codigo: 2, tipo: 'Body boton blanco', precio: 3500},
{imagen: , codigo: 3, tipo: 'Short verde agua', precio: 2800},
{imagen: , codigo: 4, tipo: 'Leggin bebe caramelo', precio: 3600},
{imagen: , codigo: 5, tipo: 'Vestido gala bolados rosa', precio: 3500},
{imagen: , codigo: 6, tipo: 'Dormilon rosa con cierre', precio: 5000},
{imagen: , codigo: 7, tipo: 'Body puercoespin verde militar', precio: 3900},
{imagen: , codigo: 8, tipo: 'Buzo bebe pitucones gris', precio: 3200},
{imagen: , codigo: 9, tipo: 'Vestido gaza bolados azul', precio: 3500}]


function buscarArticuloPorCodigo(codigo){
    let resultado = articulos.find(articulo){
        articulo.codigo === parseInt(codigo)
    }
    return resultado
}

function VerCarrito(){
    const compra = new comprar(carrito)
    alert ("el costo total de tu compra es $ " + compra.obtenerSubtotal() "por tus" + compra.obtenerTotalDeArticulos + "articulos")
}

function comprar(){
    let codigo = prompt("Ingresa el codigo (del 1 al 9) de tu articulo de interes")
    let articuloSeleccionado = buscarArticuloPorCodigo(codigo)
    if(articuloSeleccionado !== undefined){
        carrito.push(articuloSeleccionado)
        alert(articuloSeleccionado.tipo + "se agrego a tu carrito")
        let respuesta = confirm("¿Desea agregar otra prenda a su carrito?")
        if (respuesta === true){
            comprar()
        }else {
            VerCarrito()
        }

    }else {
        alert("Error en el codigo ingresado. Refresca la pagina para comenzar de nuevo por favor" )
    }
}
comprar()