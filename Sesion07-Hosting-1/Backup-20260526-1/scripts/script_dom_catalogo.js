/*  
ISIL - Instituto San Ignacio de Loyola
Curso: Programación Web Front-End
Profesor: Juan Carlos Tovar
Objetivo: Crear un sitio web para una veterinaria llamada "Huellitas Felices" utilizando HTML, CSS y JavaScript.
Proposito del Script: Crear un catálogo de gatos utilizando JavaScript para manipular el DOM 
y mostrar la información de cada gato en la página web.
id=gato-n: Identificador único para el gato en el catálogo.
<article class="gato-card" id="gato-n">
    <img src="https://placekitten.com/300/200" alt="Gato Simba">
    <div class="gato-contenido">
        <h3>Simba</h3>
        <p><span>Raza:</span> Exótico de pelo corto</p>
        <p><span>Color:</span> Gris atigrado</p>
        <p><span>Edad:</span> 2 años</p>
        <p><span>Nro de vacunas:</span> 3</p>
    </div>
</article>
*/

//-- Seleccionar el elemento del DOM donde se mostrará la información del gato utilizando su ID.
let htmlGato1 = document.getElementById("gato-1");
let imgGato1 = htmlGato1.querySelector("img");
imgGato1.src = gato1.foto;
imgGato1.width = 200;
imgGato1.height = 200;
let nombreGato1 = htmlGato1.querySelector("h3");
nombreGato1.textContent = gato1.nombre;
let razaGato1 = htmlGato1.querySelector("p:nth-child(2)");
razaGato1.innerHTML = "<span>Raza:</span> " + gato1.raza;

let htmlGato2 = document.getElementById("gato-2");
let imgGato2 = htmlGato2.querySelector("img");
imgGato2.src = gato2.foto;
imgGato2.width = 200;
imgGato2.height = 200;
let nombreGato2 = htmlGato2.querySelector("h3");
nombreGato2.textContent = gato2.nombre;