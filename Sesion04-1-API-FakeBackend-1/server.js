//Este es el archivo principal del servidor, donde se configura y se inicia la aplicación Express.
const express = require('express');
//Express es un framework de Node.js que facilita la creación de servidores web y APIs.
const cors = require('cors');
//Modulo para el manejo de archivos
const fs = require('fs');

//Configurando la aplicacion Express, definiendo el puerto en el que se ejecutará
//el servidor y aplicando middleware para manejar CORS y JSON.
const app = express();
const port = 3000;

//Permite que el Front-End pueda hacer peticiones al Back-End sin problemas de CORS
//si no coloco esto, el navegador bloqueará las peticiones por seguridad, 
//ya que el Front-End y el Back-End están en dominios diferentes 
//(localhost:3000 para el Back-End y localhost:5500 para el Front-End)
app.use(cors());

//Permite que el Back-End pueda recibir datos en formato JSON desde el Front-End, 
//lo cual es común en aplicaciones web modernas donde el Front-End envía datos
//al Back-End para ser procesados o almacenados.
app.use(express.json());

//Middleware para evitar el almacenamiento en caché de las respuestas del servidor,
//lo que es útil durante el desarrollo para asegurarse de que siempre se obtienen
//los datos más recientes.
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

//Define una ruta POST en el servidor para recibir datos de mascotas desde el Front-End.
app.post('/api/mascotas', (req, res) => {
  //-- Lee el archivo JSON que actúa como base de datos, agrega la nueva mascota recibida
  //-- al array de mascotas y luego escribe el array actualizado de nuevo en el archivo JSON.
  const data = fs.readFileSync('db-mascotas.json', 'utf-8');
  if (!data) {
    fs.writeFileSync('db-mascotas.json', JSON.stringify([]));
  }
  //console.log("Contenido de BD: " + data);
  const mascotas = JSON.parse(data);
  mascotas.push(req.body);
  fs.writeFileSync('db-mascotas.json', JSON.stringify(mascotas, null, 2));
  console.log('Datos recibidos del Front-End:', req.body);
  //-- Manejo la peticion de respuesta al Front-End, enviando un mensaje de éxito
  //-- junto con un ID generado aleatoriamente para la mascota registrada.
  res.status(200).send({
    mensaje: `Mascota ${req.body.nombre} recibida correctamente en el servidor!`,
    id: Math.floor(Math.random() * 10000) // Genera un ID aleatorio para la mascota
  })
});

//Define una ruta GET en el servidor para obtener el catálogo de mascotas registrado,
//lo que permite al Front-End mostrar la lista de mascotas registradas en la aplicación.
app.get('/api/catalogo', (req, res) => {
  try {
    //-- Lee el archivo JSON que actúa como base de datos
    const data = fs.readFileSync('db-mascotas.json', 'utf-8');
    const catalogo = JSON.parse(data || '[]');
    //-- Envio la respuesta al Front-End con el catálogo de mascotas registrado, lo que permite
    //-- al Front-End mostrar la lista de mascotas registradas en la aplicación.
    res.status(200).send(catalogo);
  } catch (error) {
    console.error('Error al leer el catálogo de mascotas:', error);
    res.status(500).send({ mensaje: 'Error al obtener el catálogo de mascotas' });
  }
});

//Inicia el servidor y lo pone a escuchar en el puerto definido, 
//mostrando un mensaje en la consola.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});