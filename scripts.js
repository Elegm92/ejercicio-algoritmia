//Ejer 1: Suma de dos números: Escribe una función que tome dos números como parámetros y devuelva su suma.
function suma(a,b){
    return a + b;
}
console.log(suma(3,5));

//Ejer 2: Número par o impar: Escribe una función que verifique si un número es par o impar.
function esPar(numero){
    return numero % 2 === 0 ? "Par" : "Impar";
}
console.log(esPar(10));
console.log(esPar(7));

//Ejer 3: Máximo de tres números: Escribe una función que encuentre el mayor de tres números.
//Con max:
function maximo(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maximo(3, 7, 5)); 

//Sin max:

function numMax(a,b,c){
    let mayor = a;
    if(b>mayor){
        mayor= b;
    }
    if(c>mayor){
        mayor = c;
    }
    return mayor;
}
console.log(maximo(3, 7, 5)); 

//Ejer 4: Invertir cadena: Escribe una función que tome una cadena como entrada y devuelva la cadena invertida.

function invertida(texto) {
  return texto.split('').reverse().join('');
}

console.log(invertirda("hola")); 
console.log(invertirda("mundo")); 


