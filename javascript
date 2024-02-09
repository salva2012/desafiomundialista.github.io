// Array de objetos que contiene las preguntas y sus opciones de respuesta
const preguntas = [
    {
        pregunta: "¿En qué año se celebró el primer Mundial de Fútbol?",
        opciones: ["1930", "1928", "1934", "1926"],
        respuesta: "1930"
    },
    {
        pregunta: "¿En qué país se realizó el primer Mundial de Fútbol?",
        opciones: ["Brasil", "Argentina", "Uruguay", "Italia"],
        respuesta: "Uruguay"
    },
    {
        pregunta: "¿quien fue el maximo goleador de la copa del mundo de 2010?",
        opciones: ["forlan", "iniesta", "messi"],
        respuesta: "forlan"
    },
    {
        pregunta: "¿desde que año el tula conocido hincha argentino empezo a ir a los mundiales en forma interrumpida?",
        opciones: ["2010", "1974", "1957", "1998"],
        respuesta: "1974"
    },
    {
        pregunta: "¿Cuál fue el único país que ha ganado tres veces consecutivas la Copa del Mundo?",
        opciones: ["Brasil", "Italia", "Alemania", "Argentina"],
        respuesta: "Brasil"
    },
    {
        pregunta: "¿Quién fue el máximo goleador en la historia de los Mundiales?",
        opciones: ["Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Pelé"],
        respuesta: "Pelé"
    },
    {
        pregunta: "¿En qué Mundial se introdujo por primera vez la tarjeta roja?",
        opciones: ["1974", "1966", "1982", "1978"],
        respuesta: "1970"
    },
    {
        pregunta: "¿Cuál ha sido la final de la Copa del Mundo con mayor cantidad de goles anotados?",
        opciones: ["Brasil vs. Italia en 1994", "Alemania vs. Argentina en 2014", "Brasil vs. Suecia en 1958", "Uruguay vs. Brasil en 1950"],
        respuesta: "Brasil vs. Italia en 1994"
    },
    {
        pregunta: "¿Qué jugador anotó el famoso 'Gol del Siglo' en el Mundial de 1986?",
        opciones: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Ronaldo Nazário"],
        respuesta: "Diego Maradona"
    },
    {
        pregunta: "¿En qué Mundial se utilizó por primera vez la tecnología de la línea de gol?",
        opciones: ["2010", "2006", "2014", "2018"],
        respuesta: "2014"
    },
    {
        pregunta: "¿Quién fue el primer jugador en anotar un gol en la historia de los Mundiales?",
        opciones: ["Pelé", "Lucien Laurent", "Diego Maradona", "Leônidas"],
        respuesta: "Lucien Laurent"
    },
    {
        pregunta: "¿Qué equipo ganó el Mundial de Fútbol de 2010?",
        opciones: ["Alemania", "Italia", "España", "Argentina"],
        respuesta: "España"
    },
    {
        pregunta: "¿Cuál es el país que ha sido anfitrión del Mundial de Fútbol en más ocasiones?",
        opciones: ["Brasil", "Italia", "Francia", "Alemania"],
        respuesta: "Italia"
    },
    {
        pregunta: "¿Quién fue el capitán de la selección italiana que ganó el Mundial de 2006?",
        opciones: ["Gianluigi Buffon", "Fabio Cannavaro", "Paolo Maldini", "Alessandro Del Piero"],
        respuesta: "Fabio Cannavaro"
    },
    {
        pregunta: "¿Cuál fue el único país que ha ganado el Mundial como local en dos ocasiones?",
        opciones: ["Brasil", "Alemania", "Uruguay", "Argentina"],
        respuesta: "Brasil"
    },
    {
        pregunta: "¿Cuál fue el primer país africano en organizar un Mundial?",
        opciones: ["Egipto", "Marruecos", "Nigeria", "Sudáfrica"],
        respuesta: "Sudáfrica"
    },
    {
        pregunta: "¿En qué Mundial se introdujo por primera vez la tanda de penales para desempatar?",
        opciones: ["1978", "1982", "1986", "1990"],
        respuesta: "1982"
    },
    {
        pregunta: "¿Quién fue el primer jugador en ganar tres Mundiales como jugador?",
        opciones: ["Pelé", "Diego Maradona", "Franz Beckenbauer", "Zinedine Zidane"],
        respuesta: "Pelé"
    },
    {
        pregunta: "¿En qué Mundial se disputó el famoso 'Partido del Siglo' entre Italia y Alemania?",
        opciones: ["Mundial de 1950", "Mundial de 1970", "Mundial de 1982", "Mundial de 1970"],
        respuesta: "Mundial de 1970"
    },
    {
        pregunta: "¿Cuál fue el primer país en ganar el Mundial de Fútbol?",
        opciones: ["Brasil", "Argentina", "Uruguay", "Italia"],
        respuesta: "Uruguay"
    },
    {
        pregunta: "¿Quién fue el entrenador de la selección española que ganó el Mundial de 2010?",
        opciones: ["Vicente del Bosque", "Luis Aragonés", "Pep Guardiola", "José Mourinho"],
        respuesta: "Vicente del Bosque"
    },
    {
        pregunta: "¿En qué Mundial se implementó por primera vez el sistema de VAR?",
        opciones: ["Mundial de 2010", "Mundial de 2014", "Mundial de 2018", "Mundial de 2006"],
        respuesta: "Mundial de 2018"
    },
    {
        pregunta: "¿Quién fue el máximo goleador del Mundial de 2014?",
        opciones: ["Thomas Müller", "Lionel Messi", "Neymar", "James Rodríguez"],
        respuesta: "James Rodríguez"
    },
    {
        pregunta: "¿En qué Mundial se introdujo el uso del balón Telstar, diseñado por Adidas?",
        opciones: ["Mundial de 1970", "Mundial de 1982", "Mundial de 1966", "Mundial de 1954"],
        respuesta: "Mundial de 1970"
    },
    {
        pregunta: "¿Quién fue el primer portero en anotar un gol en un Mundial?",
        opciones: ["Rogério Ceni", "René Higuita", "Jorge Campos", "Antonio Carbajal"],
        respuesta: "René Higuita"
    },
    {
        pregunta: "¿En qué Mundial se introdujo por primera vez el trofeo de la Copa del Mundo?",
        opciones: ["Mundial de 1930", "Mundial de 1970",
];

// Función para mostrar una pregunta aleatoria
function mostrarPreguntaAleatoria() {
    const preguntaIndex = Math.floor(Math.random() * preguntas.length);
    const preguntaActual = preguntas[preguntaIndex];
    
    console.log("Pregunta: " + preguntaActual.pregunta);
    console.log("Opciones:");
    preguntaActual.opciones.forEach((opcion, index) => {
        console.log(index + 1 + ". " + opcion);
    });

    // Aquí puedes implementar la lógica para validar la respuesta del usuario
}

// Función para mostrar 10 preguntas aleatorias para competir
function mostrarPreguntasCompetencia() {
    console.log("¡Comienza la competencia!");
    for (let i = 0; i < 10; i++) {
        const preguntaIndex = Math.floor(Math.random() * preguntas.length);
        const preguntaActual = preguntas[preguntaIndex];
        
        console.log("Pregunta " + (i + 1) + ": " + preguntaActual.pregunta);
        // Aquí puedes implementar la lógica para mostrar solo las opciones de respuesta sin revelar la respuesta correcta
    }
}

// Ejemplos de uso
console.log("Mostrar una pregunta aleatoria:");
mostrarPreguntaAleatoria();

console.log("\nMostrar preguntas para competir:");
mostrarPreguntasCompetencia();
