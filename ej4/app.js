/*4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array
“y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código.
const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l", "bro", "g"];*/

const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

//includes - valida si dentro de un array existe los metodos del otro

// y.forEach((element) => {
//   //   console.log(element);
//   //"d", "n", "l", "bro", "g"
//   if (!x.includes(element)) {
//     console.log(element);
//   }
// });

y.forEach((element) => (!x.includes(element) ? console.log(element) : null));

//condición ? expr1 : expr2
