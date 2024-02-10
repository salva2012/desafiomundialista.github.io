// Capturamos el formulario de comentarios
const commentForm = document.getElementById('commentForm');

// Capturamos la sección de comentarios
const commentSection = document.getElementById('commentSection');

// Función para manejar el envío de comentarios
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (name && comment) {
        // Creamos un nuevo elemento de comentario
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
        
        // Agregamos el comentario a la sección de comentarios
        commentSection.appendChild(newComment);

        // Limpiamos los campos del formulario
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Por favor ingresa tu nombre y tu comentario.');
    }
});
