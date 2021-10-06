 //ELECCION DE 3 DESTINOS - DESCUENTO + IVA
let destinos = prompt("Elije uno de los siguientes 3 destinos: IGZ - CBA - BRC").toLocaleUpperCase();


const suma  = (a, b) => a + b;
const resta  = (a, b) => a - b;
const iva   = x => x * 0.21;

 function viajar(descuento,iva,precioCba,precioIgz,precioBrc){
     if (destinos == "CBA"){
        let precioFinal = resta(suma(precioCba, iva(precioCba)), descuento); 
        document.write (`Su destino elegido es "CORDOBA"`+ `<br>`+ `El precio total es de: ${precioFinal}`+ `<br>`);
     }
     else if (destinos == "IGZ"){
        let precioFinal = resta(suma(precioIgz, iva(precioIgz)), descuento);
        document.write (`Su destino elegido es "IGUAZÚ"`+ `<br>`+ `El precio total es de: ${precioFinal}`+ `<br>`);
     }
     else if (destinos == "BRC"){
        let precioFinal = resta(suma(precioBrc, iva(precioBrc)), descuento);
        document.write (`Su destino elegido es "BARILOCHE"`+ `<br>`+ `El precio total es de: ${precioFinal}`+ `<br>`);
     }
     else{
         alert("NO TENEMOS ESE DESTINO, VUELVE A INTENTARLO");
     }
 }



 let descuento = 1000;
 let precioCba = 15000;
 let precioIgz = 25000;
 let precioBrc = 35000;

viajar(descuento,iva,precioCba,precioIgz,precioBrc);