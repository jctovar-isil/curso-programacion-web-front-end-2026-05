fetch('http://localhost:3000/api/catalogo', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
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
    // Aquí puedes manipular el DOM para mostrar el catálogo de mascotas en la página web
    // Por ejemplo, podrías crear elementos HTML dinámicamente para cada mascota en el catálogo
    const catalogoContainer = document.getElementById('gatos');
    catalogoContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar las mascotas
    data.forEach(mascota => {
        const mascotaCard = document.createElement('article');
        mascotaCard.classList.add('gato-card');
        mascotaCard.innerHTML = `
            <img src="${mascota.foto}" alt="Foto de ${mascota.nombre}" width="200" height="200">
            <div class="gato-contenido">
                <h3>${mascota.nombre}</h3>
                <p><span>Raza:</span> ${mascota.raza}</p>
                <p><span>Color:</span> ${mascota.color || 'No especificado'}</p>
                <p><span>Edad:</span> ${mascota.edad} años</p>
                <p><span>Nro de vacunas:</span> ${mascota.vacunas || '0'}</p>
            </div>
        `;
        catalogoContainer.appendChild(mascotaCard);
    });
})
.catch(error => {
    console.error('Error:', error);
    alert('Error al registrar la mascota');
});

