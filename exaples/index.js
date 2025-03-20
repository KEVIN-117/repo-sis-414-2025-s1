// variables: var, let, const
let name = 'John';// mutable
console.log(name);
name = "Doe";
console.log(name);
const pi = 3.14; // immutable
console.log(pi);
//pi = 3.15; // error


// tipos de datos:
// inferencia de tipos
/*
string -> cadenas de texto
number -> numeros enteros y decimales
boolean -> true o false
object -> 
array -> []
undefined -> 
null -> 
*/


/*
operadores
 -> aritemticos = + - * / %
 -> compracion = == != , === !==, > < >= <=
    === -> compara valor y tipo
    == -> compara solo valor
 -> logicos = &&, ||, !
 -> asignacion: =, +=, -=, *=, /=, %= -> a += 1 ==> a = a + 1
*/

// condicionales: if, else, else if, switch

let person = {
    name: "John",
    age: 30,
}

if (person.age > 18) {
    console.log("Es mayor de edad");
}
else if (person.name != "John") {
    console.log("no es John");
}
else if (person.age > 18 && person.name === "John") {
    console.log("Es mayor de edad y se llama John");
}
else {
    console.log("Es menor de edad");
}

// switch
let day = 1;

switch (day){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.log("No es un dia de la semana");
}

// bucles: for, while, for of, for in

let names = ["John", "Doe", "Jane", "Smith"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let acum = 0;

while(acum < 10){
    console.log(acum);
    acum += 1; // acum
}


for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(index);
}


// funciones
function add(a, b) { // declaracion de funcion
    return a + b;
}

// exprecion de funcion
const formatDate = function(date){
    return new Date(date)
}


formatDate("2021-10-10");

// arrow function
const getMax = (...args) => Math.max(...args);

console.log(getMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
