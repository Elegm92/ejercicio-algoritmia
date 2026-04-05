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

console.log(invertida("hola")); 
console.log(invertida("mundo")); 

//Ejer 5: Calcular factorial: Escribe una función que calcule el factorial de un número dado.

function factorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log(factorial(5)); 
console.log(factorial(3)); 

//Ejer 6: Comprobar si una palabra es un palíndromo: Verifica si una cadena es un palíndromo (se lee igual de adelante hacia atrás).
function esPalindromo(texto) {
  let invertida = texto.split('').reverse().join('');
  return texto === invertida;
}

console.log(esPalindromo("radar"));
console.log(esPalindromo("hola"));

//Ejer 7: Contar vocales en una cadena: Escribe una función que cuente cuántas vocales hay en una cadena.

function contarVocales(texto) {
  let contador = 0;
  let vocales = "aeiou";

  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVocales("Hola mundo")); 
console.log(contarVocales("JavaScript")); 

//Ejer 8: Encontrar el número más grande en un array: Dado un array de números, encuentra y devuelve el número más grande.

function maximoArray(numeros) {
  return Math.max(...numeros);
}

console.log(maximoArray([3, 7, 2, 9, 5]));

//Ejer 9: Ordenar un array de números: Escribe una función que ordene un array de números en orden ascendente.

function ordenarArray(numeros) {
  return numeros.sort(function(a, b) {
    return a - b;
  });
}

console.log(ordenarArray([5, 2, 9, 1, 7]));

//Ejer 10: Sumar todos los números de un array: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.

function sumarArray(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}

console.log(sumarArray([1, 2, 3, 4, 5]));

//Ejer 11: Eliminar duplicados en un array: Escribe una función que elimine los valores duplicados en un array.

function eliminarDuplicados(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (!resultado.includes(array[i])) {
      resultado.push(array[i]);
    }
  }

  return resultado;
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); 

//Con filter:

function eliminarDuplicados(array) {
  return array.filter(function(valor, indice) {
    return array.indexOf(valor) === indice;
  });
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));

//Ejer 12: Generar una lista de números del 1 al n: Escribe una función que genere una lista de números del 1 al número n especificado.

function generarLista(n) {
  let lista = [];

  for (let i = 1; i <= n; i++) {
    lista.push(i);
  }

  return lista;
}

console.log(generarLista(5));

//Ejer 13: Encontrar el número más pequeño en un array: Dado un array de números, encuentra y devuelve el número más pequeño.

function minimoArray(numeros) {
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  return menor;
}

// Ejemplo
console.log(minimoArray([3, 7, 2, 9, 5]));

//Ejer 14: Multiplicar todos los números de un array: Escribe una función que multiplique todos los números de un array y devuelva el producto total.

function multiplicarArray(numeros) {
  let producto = 1;

  for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
  }

  return producto;
}

console.log(multiplicarArray([1, 2, 3, 4])); 

//Con reduce:

function multiplicarArray(numeros) {
  return numeros.reduce(function(acumulador, numero) {
    return acumulador * numero;
  }, 1);
}

console.log(multiplicarArray([1, 2, 3, 4])); 

//Ejer 15: Convertir una cadena a mayúsculas: Escribe una función que tome una cadena y la convierta completamente a mayúsculas.

function aMayusculas(texto) {
  return texto.toUpperCase();
}

console.log(aMayusculas("hola"));  
console.log(aMayusculas("JavaScript")); 

//Ejer 16: Reemplazar espacios por guiones en una cadena: Escribe una función que reemplace todos los espacios en una cadena con guiones.

function reemplazarEspacios(texto) {
  return texto.split(" ").join("-");
}

console.log(reemplazarEspacios("hola mundo"));

//Ejer 17: Calcular la media de los números en un array: Dado un array de números, calcula y devuelve su media.

function calcularMedia(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma / numeros.length;
}

console.log(calcularMedia([2, 4, 6, 8]));

//Con reduce: 

function calcularMedia(numeros) {
  let suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);

  return suma / numeros.length;
}

console.log(calcularMedia([2, 4, 6, 8]));

//Ejer 18: Generar números aleatorios en un rango: Escribe una función que genere un número aleatorio dentro de un rango dado (min y max).

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(1, 10));
console.log(numeroAleatorio(5, 15)); 

//Ejer 19: Contar palabras en una cadena: Escribe una función que cuente cuántas palabras hay en una cadena.

function contarPalabras(texto) {
  let palabras = texto.split(" ");
  return palabras.length;
}

console.log(contarPalabras("Hola mundo"));

//Ejer 19: Comprobar si todos los elementos de un array son iguales: Dado un array, verifica si todos sus elementos son iguales o no.

function todosIguales(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }

  return true;
}

console.log(todosIguales([1, 1, 1, 1]));
console.log(todosIguales([1, 2, 1]));  

//Ejercicios nivel medio-alto:

//Ejer 20: Fibonacci Recursivo. Escribe una función que devuelva el n-ésimo número de Fibonacci usando recursión.

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1)); 
console.log(fibonacci(6)); 

//Ejer 21: Contar caracteres en una cadena. Escribe una función que cuente cuántas veces aparece cada carácter en una cadena y devuelva un objeto con el resultado.

function contarCaracteres(texto) {
  let resultado = {};

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];

    if (resultado[char]) {
      resultado[char]++;
    } else {
      resultado[char] = 1;
    }
  }

  return resultado;
}

console.log(contarCaracteres("hola"));
console.log(contarCaracteres("banana"));

//Ejer 22: Ordenar un array de objetos. Dado un array de objetos, escribe una función que lo ordene en función de una propiedad específica del objeto (por ejemplo, por edad o nombre).

let personas = [
  { nombre: "Elena", edad: 25 },
  { nombre: "Jaime", edad: 30 },
  { nombre: "Maria", edad: 20 }
];

function ordenarEdad(array) {
  return array.sort(function(a, b) {
    return a.edad - b.edad;
  });
}

console.log(ordenarEdad(personas));

//Ejer 23: Eliminar elementos falsy de un array. Escribe una función que elimine todos los valores falsy (false, 0, "", null, undefined, NaN) de un array.

function eliminarFalsy(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      resultado.push(array[i]);
    }
  }

  return resultado;
}

console.log(eliminarFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));

//Con filter:

function eliminarFalsy(array) {
  return array.filter(function(valor) {
    return Boolean(valor);
  });
}

console.log(eliminarFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));

//Ejer 24: Anagramas. Escribe una función que determine si dos cadenas son anagramas, es decir, si tienen las mismas letras en diferente orden.

function sonAnagramas(str1, str2) {
  let contar = {};

  let texto1 = str1.toLowerCase().replace(/\s/g, '');
  let texto2 = str2.toLowerCase().replace(/\s/g, '');

  if (texto1.length !== texto2.length) return false;

  for (let char of texto1) {
    contar[char] = (contar[char] || 0) + 1;
  }

  for (let char of texto2) {
    if (!contar[char]) return false;
    contar[char]--;
  }

  return true;
}

console.log(sonAnagramas("roma", "amor"));  
console.log(sonAnagramas("hola", "laho")); 
console.log(sonAnagramas("hola", "mundo"));    

//Ejer 25: Matriz identidad. Crea una función que genere una matriz identidad de tamaño n x n.

function matrizIdentidad(n) {
  let matriz = [];

  for (let i = 0; i < n; i++) {
    let fila = [];

    for (let j = 0; j < n; j++) {
      if (i === j) {
        fila.push(1);
      } else {
        fila.push(0);
      }
    }

    matriz.push(fila);
  }

  return matriz;
}

console.log(matrizIdentidad(3));

//Ejer 26: Contar palabras repetidas en una cadena. Escribe una función que cuente cuántas veces aparece cada palabra en una cadena y devuelva el resultado en un objeto.

function contarPalabras(texto) {
  let resultado = {};
  let palabras = texto.toLowerCase().split(" ");

  for (let palabra of palabras) {
    if (resultado[palabra]) {
      resultado[palabra]++;
    } else {
      resultado[palabra] = 1;
    }
  }

  return resultado;
}

console.log(contarPalabras("hola mundo hola"));

//Ejer 27: Invertir los elementos de un array sin usar reverse. Implementa una función que invierta los elementos de un array sin usar el método reverse.

function invertirArray(array) {
  let resultado = [];

  for (let i = array.length - 1; i >= 0; i--) {
    resultado.push(array[i]);
  }

  return resultado;
}

console.log(invertirArray([1, 2, 3, 4]));

//Ejer 28: Encontrar el primer número que no se repite. Dado un array de números, encuentra el primer número que no se repite y devuélvelo.

function primerNoRepetido(array) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (array.indexOf(num) === array.lastIndexOf(num)) {
      return num;
    }
  }

  return null;
}

console.log(primerNoRepetido([2, 3, 4, 2, 3, 5, 4]));

//Ejer 29: Rotar un array. Escribe una función que rote los elementos de un array n posiciones hacia la derecha o hacia la izquierda.

function rotarArray(array, n) {
  let len = array.length;
  n = n % len; // evitar vueltas completas

  if (n > 0) {
    // derecha
    return array.slice(-n).concat(array.slice(0, len - n));
  } else {
    // izquierda
    n = Math.abs(n);
    return array.slice(n).concat(array.slice(0, n));
  }
}

console.log(rotarArray([1, 2, 3, 4, 5], 2));
console.log(rotarArray([1, 2, 3, 4, 5], -2)); 

//Ejer 30: Encontrar la subsecuencia creciente más larga. Dado un array de enteros, encuentra la subsecuencia creciente más larga.

//Ejer 31: Validar paréntesis balanceados. Escribe una función que verifique si los paréntesis en una cadena están balanceados.

function parentesisBalanceados(texto) {
  let contador = 0;

  for (let char of texto) {
    if (char === "(") {
      contador++;
    } else if (char === ")") {
      contador--;

      if (contador < 0) {
        return false; // hay cierre sin apertura
      }
    }
  }

  return contador === 0;
}

console.log(parentesisBalanceados("(())"));
console.log(parentesisBalanceados("(()"));   
console.log(parentesisBalanceados("())("));   

