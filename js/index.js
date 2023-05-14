const cantPrendas = 4

function mostrarCuotas() {
    console.log("COMPRANDO 👇")
    for(let i = 1; i <= cantPrendas; i++) {
        if (i === 2){
            continue
        }
            if (i === 1){
           console.log(i  + " prenda, " + i + "0% de descuento")
        }
        else{
        console.log(i  + " prendas, " + i + "0% de descuento")
        }   
    }
    console.warn("APROVECHÁ NUESTRO HOT SALE!")
}

function mostrarPrecio(cod){
    if ((parseInt(cod)) === 1){
        alert("El body cuesta $ 5100")
    }
    else if ((parseInt(cod)) === 2){
        alert("El pantalon cuesta $ 3390")  
        }
    else if ((parseInt(cod)) === 3){
        alert("El enterito cuesta $ 7200")
        }
    else if ((parseInt(cod)) === 4){
        alert("El buzo de jean cuesta $ 6540")
        } 
    else{
        console.error("Por favor ingrese una opcion válida")
    }
}

function infoPrendas() {
    let respuesta = confirm("¿Deseas conocer el precio de alguna de nuestras prendas?")
    if (respuesta) {
        let cod = prompt("Ingresa el código numérico de la prenda a consultar guiandose por la lista:")
            if (cod) {
                mostrarPrecio(cod)
                mostrarCuotas()
            }
    } else {
        console.warn("Gracias por visitarnos! Lo esperamos en otro momento.")
    }
}