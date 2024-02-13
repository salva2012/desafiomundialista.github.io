// Evento para enviar el formulario de comentarios
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        addComment(commentText);
        commentInput.value = '';
    }
});

// Función para agregar un comentario
function addComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment;
    commentList.appendChild(li);
}
