/*
ISIL - Instituto San Ignacio de Loyola
Curso: Programación Web Front-End
Profesor: Juan Carlos Tovar
Objetivo: Crear un sitio web para una veterinaria llamada "Huellitas Felices" utilizando HTML, CSS y JavaScript.
Proposito del Script: Trabajar con POO (Programación Orientada a Objetos) en JavaScript.
*/

// Definicion de clase Mascota utilizando la sintaxis de ES6, es una clase abstracta
// que representa a una mascota con sus propiedades solamente, sin métodos específicos.
class Mascota {
  constructor(nombre, edad, dimensiones, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.dimensiones = dimensiones;
    this.peso = peso;
  }
};

// Crear una instancia de la clase Mascota
const mascota1 = new Mascota("Firulais", 5, [100, 60, 30], 30.5);
const mascota2 = new Mascota("Michi", 3, [50, 30, 20], 5.2);
const mascota3 = new Mascota("ReyLeon", 2, [170, 110, 45], 80.8);

console.log("Información de la mascota 1:");
console.log("Nombre: " + mascota1.nombre);
console.log("Edad: " + mascota1.edad + " años");
console.log("Dimensiones (Largo x Ancho x Alto): " + mascota1.dimensiones.join(" x ") + " cm");
console.log("Peso: " + mascota1.peso + " kg");

console.log("Información de la mascota 2:");
console.log("Nombre: " + mascota2.nombre);
console.log("Edad: " + mascota2.edad + " años");
console.log("Dimensiones (Largo x Ancho x Alto): " + mascota2.dimensiones.join(" x ") + " cm");
console.log("Peso: " + mascota2.peso + " kg");

console.log("Información de la mascota 3:");
console.log("Nombre: " + mascota3.nombre);
console.log("Edad: " + mascota3.edad + " años");
console.log("Dimensiones (Largo x Ancho x Alto): " + mascota3.dimensiones.join(" x ") + " cm");
console.log("Peso: " + mascota3.peso + " kg");

// Definir dos clases adicionales que heredan de Mascota: MascotaDomestica y MascotaSilvestre,
// cada una con sus propias propiedades específicas, aqui se aplica el concepto de herencia.

class MascotaDomestica extends Mascota {
  //nombre, edad, dimensiones, peso provienen de la clase padre Mascota
  //mientras que raza, color y dueno son propiedades específicas para mascotas domésticas
  constructor(nombre, edad, dimensiones, peso, raza, color, dueno, foto) {
    super(nombre, edad, dimensiones, peso);
    this.raza = raza;
    this.color = color;
    this.dueno = dueno;
    this.foto = foto;
  }
};

class MascotaSilvestre extends Mascota {
  //nombre, edad, dimensiones, peso provienen de la clase padre Mascota
    //mientras que habitat es una propiedad específica para mascotas silvestres
  constructor(nombre, edad, dimensiones, peso, habitat) {
    super(nombre, edad, dimensiones, peso);
    this.habitat = habitat; // Propiedad específica para mascotas silvestres
  }
};

// Crear clases Perro y Gato que heredan de MascotaDomestica, cada una con un método específico
// para mostrar sus propiedades, aplicando el concepto de herencia.
class Perro extends MascotaDomestica {
    constructor(nombre, edad, dimensiones, peso, raza, color, dueno, nroVacunas) {
        super(nombre, edad, dimensiones, peso, raza, color, dueno);
        this.nroVacunas = nroVacunas; // Propiedad específica para perros
    }
    mostrarInformacion() {
        console.log("Información del perro:");
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad + " años");
        console.log("Dimensiones (Largo x Ancho x Alto): " + this.dimensiones.join(" x ") + " cm");
        console.log("Peso: " + this.peso + " kg");
        console.log("Raza: " + this.raza);
        console.log("Color: " + this.color);
        console.log("Dueño: " + this.dueno);
        console.log("Número de vacunas: " + this.nroVacunas);
    }
    aplicarVacuna() {
        this.nroVacunas += 1;
    }
};

class Gato extends MascotaDomestica {
    constructor(nombre, edad, dimensiones, peso, raza, color, dueno, esAlergico) {
        super(nombre, edad, dimensiones, peso, raza, color, dueno);
        this.esAlergico = esAlergico; // Propiedad específica para gatos
    }
    mostrarInformacion() {
        console.log("Información del gato:");
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad + " años");
        console.log("Dimensiones (Largo x Ancho x Alto): " + this.dimensiones.join(" x ") + " cm");
        console.log("Peso: " + this.peso + " kg");
        console.log("Raza: " + this.raza);
        console.log("Color: " + this.color);
        console.log("Dueño: " + this.dueno);
        console.log("Es alérgico: " + this.esAlergico);
    }
    definirAlergia() {
        if (this.esAlergico) {
            console.log(this.nombre + " es alérgico.");
        } else {
            console.log(this.nombre + " no es alérgico.");
        }   
    }
};

// Crear clases Tortuga y Leon que heredan de MascotaSilvestre, cada una con un método específico

class Tortuga extends MascotaSilvestre {
    constructor(nombre, edad, dimensiones, peso, habitat, esAcuatica) {
        super(nombre, edad, dimensiones, peso, habitat);
        this.esAcuatica = esAcuatica; // Propiedad específica para tortugas
    }
};

class Leon extends MascotaSilvestre {
    constructor(nombre, edad, dimensiones, peso, habitat, esCarnivoro) {
        super(nombre, edad, dimensiones, peso, habitat);
        this.esCarnivoro = esCarnivoro; // Propiedad específica para leones
    }
};

// Crear instancias de Perro, Gato, Tortuga y Leon para demostrar el uso de las clases y la herencia.
const perro1 = new Perro("Firulais", 5, [100, 60, 30], 30.5, "Labrador Retriever", "Amarillo", "Juan", 3);
const gato1 = new Gato("Michi", 3, [50, 30, 20], 5.2, "Siames", "Gris", "Ana", true);
const gato2 = new Gato("Simba", 4, [55, 35, 25], 6.0, "Persa", "Blanco", "Carlos", false);
const tortuga1 = new Tortuga("Tortuguita", 10, [30, 20, 15], 2.5, "Río Amazonas", true);
const tortuga2 = new Tortuga("Tortuguita 2", 11, [31, 21, 16], 3.5, "Río Lurin", true);
const leon1 = new Leon("ReyLeon", 2, [170, 110, 45], 80.8, "Sabana Africana", true);

//-- Llamo a los métodos específicos para mostrar la información del perro y aplicar una vacuna.
console.log("Antes de aplicar una vacuna:");
perro1.mostrarInformacion();
//-- Aplico una vacuna al perro utilizando el método aplicarVacuna() y luego muestro
//-- nuevamente su información para verificar el cambio en el número de vacunas.
perro1.aplicarVacuna();
console.log("Después de aplicar una vacuna:");
perro1.mostrarInformacion();

//-- Llamo a los métodos específicos para mostrar la información del gato y definir su alergia.
gato1.mostrarInformacion();
gato1.definirAlergia();

//-- Defino una funcion "en caliente" para mostrar la información de la tortuga, 
//-- ya que no tiene un método específico definido en su clase.
tortuga1.mostrarInformacion = function() {
    console.log("Información de la tortuga:");
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad + " años");
    console.log("Dimensiones (Largo x Ancho x Alto): " + this.dimensiones.join(" x ") + " cm");
    console.log("Peso: " + this.peso + " kg");
    console.log("Hábitat: " + this.habitat);
    console.log("Es acuática: " + this.esAcuatica);
};
//-- Llamo al método definido "en caliente" para mostrar la información de la tortuga.
tortuga1.mostrarInformacion();

//-- LLamo al metodo definido en tortuga1 para mostrar la información de tortuga2,
//-- demostrando que cada instancia de la clase puede tener su propia función definida "en caliente"
//-- sin afectar a las demás instancias. En este caso no va a funcionar porque tortuga2 no tiene el
//-- método mostrarInformacion() definido en tortuga1, lo que demuestra que cada instancia es independiente.
try {
    tortuga2.mostrarInformacion();
} catch (error) {
    console.log("Error: No se puede mostrar la información de la tortuga 2: " + error.message);
}

gato1.foto = "https://www.anicura.es/cdn-cgi/image/f=auto,fit=cover,w=640,h=640,g=auto,sharpen=1/AdaptiveImages/powerinit/15123/Print_AniCura_Cats_190_British%20shorthair.jpg?stamp=2ed666617af4a8a49779ee0dc1ffde8cbff6e8f4";
gato2.foto = "https://www.anicura.es/cdn-cgi/image/f=auto,fit=cover,w=640,h=640,g=auto,sharpen=1/AdaptiveImages/powerinit/52437/_SNI2031.jpg?stamp=a2efc90c9d13cd9fdc0f5f7a2e3b2231238dc8cf";