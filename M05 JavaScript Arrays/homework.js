/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código: 
   //return array.shift()
   return array[0]
}
console.log(devolverPrimerElemento([1,2,3,4]))

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código: 
   //return array.pop()
   return array.at(-1)
}
console.log(devolverUltimoElemento([1,2,3,4]))

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
console.log(obtenerLargoDelArray([1,2,3,4,5,"comida"]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
     var masuno = array.map(function (elem){
      elem = elem + 1
      return elem
   })
   return masuno
}
console.log(incrementarPorUno([1,2,3,4,5]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}
console.log(agregarItemAlFinalDelArray([1,2,3,4],5))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}
console.log(agregarItemAlComienzoDelArray([1,2,3,4],0))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ")
}
console.log(dePalabrasAFrase(["Hello", "world!"]))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}
console.log(arrayContiene([1,2,3],2))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce(function (a,b){
      return a + b
   })
}
console.log(agregarNumeros([1,2,3,4]))

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
      return agregarNumeros(resultadosTest)/obtenerLargoDelArray(resultadosTest)
}
console.log(promedioResultadosTest([1,2,3,4,5]))

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMasGrande = -Infinity
   for (var elemento of arrayOfNums) {
      if (elemento > numeroMasGrande){
         numeroMasGrande = elemento
      }
   }
   return numeroMasGrande
}
console.log(numeroMasGrande([1,2,300,4,5]))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0) return 0
   var total = 1 
   for (var elemento of arguments){
      total = total * elemento
   }
   return total
}
console.log(multiplicarArgumentos(2,5,10))

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayorA18 = array.filter(function (elemento) {
      if (elemento > 18) return elemento
   })
   return mayorA18.length
}
console.log(cuentoElementos([2,6,9,87,4,21,100]))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
   } else if (1 < numeroDeDia && numeroDeDia < 7 ) return "Es dia laboral"   
}
console.log(diaDeLaSemana(1))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString()[0] == 9 ? true : false
}
console.log(empiezaConNueve(987))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código: 
   var primeraPosicion = array[0]
   return array.every(function (elementos){
      return elementos === primeraPosicion
   })
}
console.log(todosIguales([1,0,1,1,1,1]))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var filtro = array.filter(function (mes){
      if(mes === "Enero" || mes === "Marzo" || mes === "Noviembre") return mes
   })
   var totales = new Set(filtro)
   if (totales.size < 3) return "No se encontraron los meses pedidos"
   else return filtro
}
console.log(mesesDelAño(["Enero","Diciembre","Marzo","Julio"]))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = []
   for (var i = 0; i < 11; i++){
      tabla.push(6 * i)
   }
   return tabla
}
console.log(tablaDelSeis())

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter(function (el) {
      if(el > 100) return el
   })
   }
console.log(mayorACien([120,0,101]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código: 
   var arreglo = [];
   for(var i=0; i<10; i++){
      num = num + 2
      arreglo.push(num)
      if(num===i){
           return 'Se interrumpió la ejecución'
      }
   }
   return arreglo
}
console.log(breakStatement(2))

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo = []
   for(var i=0; i<10; i++){
      if(i===5) continue
      num = num + 2
      arreglo.push(num) 
   }
   return arreglo
}
console.log(continueStatement(50))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
