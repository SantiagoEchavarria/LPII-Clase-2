//funcion
function sumar(numero1, numero2){
    return numero1+numero2;
}

let sumarVersionDos= function(numero1,numero2){
    return numero1+numero2
}; //funcion anonima
let sumarVersionTres= (numero1,numero2) =>{
    return numero1+numero2
};//Arrow function

let funcionUno=function(numero1, numero2, funcion2){
    console.log("Dentro de la funcion");
    return funcion2(numero1,numero2)
}

console.log(sumar(5,8));
console.log(sumar("Uno", "Dos"))
console.log(sumarVersionDos(5,5))
console.log(sumarVersionTres(10,10))
console.log(funcionUno(5,6,sumarVersionDos));

