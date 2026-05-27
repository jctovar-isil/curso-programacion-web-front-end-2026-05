/*
ISIL - Instituto San Ignacio de Loyola
Curso: Programación Web Front-End
Profesor: Juan Carlos Tovar
Objetivo: Crear un sitio web para una veterinaria llamada "Huellitas Felices" utilizando HTML, CSS y JavaScript.
Proposito del Script: Demostrar el uso de JavaScript.
*/

// Definicion de constante: No se puede cambiar su valor una vez asignado.
const clinica = "Veterinaria Huellitas Felices";

// Definicion de variable: Se puede cambiar su valor a lo largo del programa.
const nombreMascota = "Firulais";
const tipoMascota = "Perro";
const raza = "Labrador Retriever";
let idMascota = 999566588113489; // Identificador único para la mascota
let edadMascota = 5;
let tamanioMascota = [ 100, 60, 30 ]; // Largo, Ancho, Alto en cm
let nombreDueño = "Juan";
let peso = 30.5; // Peso en kg
let estaVacunado = true; // Booleano para indicar si la mascota está vacunada
let fechaNacimiento = new Date(2018, 4, 15); // Fecha de nacimiento de la mascota (Año, Mes (0-11), Día)

// Imprimir en la consola del navegador la información de la clínica y la mascota
// utilizando concatenación de cadenas y el método join() para el tamaño de la mascota.
console.log("Bienvenido a " + clinica);
console.log("Nombre de la mascota: " + nombreMascota);
console.log("Tipo de mascota: " + tipoMascota);
console.log("Raza: " + raza);
console.log("Edad: " + edadMascota + " años");
console.log("Tamaño (Largo x Ancho x Alto): " + tamanioMascota.join(" x ") + " cm");
console.log("Nombre del dueño: " + nombreDueño);

// Uso de typeof para verificar el tipo de dato de las variables
console.log("Tipo de dato de clinica: " + typeof clinica);
console.log("Tipo de dato de nombreMascota: " + typeof nombreMascota);
console.log("Tipo de dato de edadMascota: " + typeof edadMascota);
console.log("Tipo de dato de tamanioMascota: " + typeof tamanioMascota);
console.log("Tipo de dato de nombreDueño: " + typeof nombreDueño);
console.log("Tipo de dato de idMascota: " + typeof idMascota);
console.log("Tipo de dato de peso: " + typeof peso);
console.log("Tipo de dato de estaVacunado: " + typeof estaVacunado);
console.log("Tipo de dato de fechaNacimiento: " + typeof fechaNacimiento);