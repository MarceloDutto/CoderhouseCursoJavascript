//Declaro variables

let pregunta;
let respuesta;
let opcion1;
let opcion2;
let opcion3;
let opcion4;
let correcta;
let puntaje = 0;

//Declaro funciones

function generarPregunta(preg, opc1, opc2, opc3, opc4, corr) {
    pregunta = preg;
    opcion1 = opc1;
    opcion2 = opc2;
    opcion3 = opc3;
    opcion4 = opc4;
    correcta = corr;
}

function calcularPuntaje() {
    if (respuesta === correcta) {
        puntaje = puntaje + 1;
    }
}

// Fin de declaraciones


for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            generarPregunta("¿En qué año se estrenó la primera película de Iron Man, que lanzó el Universo Cinemático de Marvel?", "2005", "2008", "2010", "2012", 2)
            break;
        case 2:
            generarPregunta("¿Cómo se llama el martillo de Thor?", "Vanir", "Mjolnir", "Aesir", "Norn", 2)
            break;
        case 3:
            generarPregunta("¿De qué está hecho el escudo del Capitán América?", "Adamantium", "Vibranio", "Prometeo", "Carbonadio", 2)
            break;
        case 4:
            generarPregunta("¿Cuál es el verdadero nombre de la Pantera Negra?", "T'Challa", "M'Baku", "N'Jadaka", "N'Jobu", 1)
            break;
        case 5:
            generarPregunta("¿Cuál es la raza alienígena que Loki envía para invadir la Tierra en The Avengers?", "Los chitauri", "Los skrulls", "Los kree", "Los flerkens", 1)
            break;
        case 6:
            generarPregunta("¿Quién es asesinado por Loki en los Vengadores?", "Maria Hill", "Nick Fury", "Agente coulson", "Dr. Erik Selvig", 3)
            break;
        case 7:
            generarPregunta("¿Qué tipo de médico es Stephen Strange?", "Neurocirujano", "Cirujano cardiotoracico", "Cirujano de trauma", "Cirujano Plástico", 1)
            break;
        case 8:
            generarPregunta("Antes de convertirse en Visión, ¿cómo se llama el mayordomo de inteligencia artificial de Iron Man?", "Homero", "Alfredo", "Marvin", "Jarvis", 4)
            break;
        case 9:
            generarPregunta("¿Cuál es el verdadero nombre de Black Widow?", "Natalie Rushman", "Natasha Romanoff", "Nicole Rohan", "Naya Rabe", 2)
            break;
        case 10:
            generarPregunta("¿Quién chasquea los dedos en Avengers:Endgame para vencer a Thanos?", "Hulk", "Gamora", "Tony Stark", "Capitana Marvel", 3)
            break;
        default:
            generarPregunta("No es una pregunta valida", "", "", "", "", "");
            break;
    }

    respuesta = Number(prompt(i + " - " + `${pregunta}:
    1 - ${opcion1}
    2 - ${opcion2}
    3 - ${opcion3}
    4 - ${opcion4}`));

   calcularPuntaje();
}

alert(`Tu puntaje final es ${puntaje}`);

