/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
  //return x == y
  if (x == y) return true
  else return false 
}
console.log(5 == 5)
console.log(sonIguales(5,5))


function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   //if (str1.length == str2.length) return true
   //else return false
   return str1.length === str2.length
}
console.log(tienenMismaLongitud("hola","chaus"))

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   //if (num < 90) return true
   //else return false
   return num < 90
}
console.log(menosQueNoventa(50))
console.log(50<90)

console.log()
function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) return true
   else return false
}
console.log(mayorQueCincuenta(80))

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código: 
   if (num % 2 == 0) return true
   else return false
}
console.log(esPar(4))

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 !== 0) return true
   else return false
}
console.log(esImpar(75))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
