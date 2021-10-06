//calculo de IVA

let precioBuzo = parseInt(prompt("Ingrese el precio del Buzo"));
let gastosEnvio = parseInt(prompt("Ingrese el gasto de envio"));

let iva =1.21;

const suma  = (a, b) => a + b;

const multiplicar = (a,b) => a * b;

const dividir =(a,b) => a / b;

let precioTotal =suma (multiplicar(precioBuzo,iva),gastosEnvio);


document.write (`El precio total es de: ${precioTotal}`+ `<br>`);

function tresCoutas (precioTotal){
    valorCuota=precioTotal/3;
    return (valorCuota);
}

document.write (`Podes pagarlo en 3 coutas sin interes: ${tresCoutas(precioTotal)}`);