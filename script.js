// script.js

const questions = [
    {
        question: "¿En qué año se celebró el primer Mundial de Fútbol?",
        options: ["1930", "1928", "1934", "1926"],
        answer: "1930"
    },
    // Agrega aquí las otras preguntas con sus opciones y respuestas
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');

// Función para mostrar la pregunta actual y sus opciones
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
    `;
}

// Función para avanzar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // No hay más preguntas, ocultar botón "Siguiente"
        nextButton.style.display = 'none';
    }
}

// Event listener para el botón "Siguiente"
nextButton.addEventListener('click', nextQuestion);

// Mostrar la primera pregunta al cargar la página
showQuestion();
