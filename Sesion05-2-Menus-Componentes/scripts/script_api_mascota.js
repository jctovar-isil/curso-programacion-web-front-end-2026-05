document.getElementById('mascotaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
        id: parseInt(document.getElementById('id').value),
        nombre: document.getElementById('nombre').value,
        peso: parseFloat(document.getElementById('peso').value),
        edad: parseInt(document.getElementById('edad').value),
        dimensiones: [
            parseInt(document.getElementById('dimension1').value),
            parseInt(document.getElementById('dimension2').value),
            parseInt(document.getElementById('dimension3').value)
        ],
        raza: document.getElementById('raza').value,
        dueno: document.getElementById('dueno').value,
        foto: document.getElementById('foto').value
    };
    fetch('http://localhost:3000/api/mascotas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => { 
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        throw new Error('Respuesta del servidor no es JSON');
      }
      return response.json(); 
    })
    .then(data => {
        console.log('Success:', data);
        alert('Mascota registrada exitosamente: ' + data.mensaje);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar la mascota');
    });
});