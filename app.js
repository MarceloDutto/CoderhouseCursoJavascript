let pregunta;
let respuesta;
let opcion1;
let opcion2;
let opcion3;
let opcion4;
let correcta;
let puntaje = 0;

for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            pregunta = "1 - ¿En qué año se estrenó la primera película de Iron Man, que lanzó el Universo Cinemático de Marvel?"
            opcion1 = "2005"
            opcion2 = "2008"
            opcion3 = "2010"
            opcion4 = "2012"
            correcta = 2
            break;
        case 2:
            pregunta = "2 - ¿Cómo se llama el martillo de Thor?"
            opcion1 = "Vanir"
            opcion2 = "Mjolnir"
            opcion3 = "Aesir"
            opcion4 = "Norn"
            correcta = 2
            break;
        case 3:
            pregunta = "3 - ¿De qué está hecho el escudo del Capitán América?"
            opcion1 = "Adamantium"
            opcion2 = "Vibranio"
            opcion3 = "Prometeo"
            opcion4 = "Carbonadio"
            correcta = 2
            break;
        case 4:
            pregunta = "4 - ¿Cuál es el verdadero nombre de la Pantera Negra?"
            opcion1 = "T'Challa"
            opcion2 = "M'Baku"
            opcion3 = "N'Jadaka"
            opcion4 = "N'Jobu"
            correcta = 1
            break;
        case 5:
            pregunta = "5 - ¿Cuál es la raza alienígena que Loki envía para invadir la Tierra en The Avengers?"
            opcion1 = "Los chitauri"
            opcion2 = "Los skrulls"
            opcion3 = "Los kree"
            opcion4 = "Los flerkens"
            correcta = 1
            break;
        case 6:
            pregunta = "6 - ¿Quién es asesinado por Loki en los Vengadores?"
            opcion1 = "Maria Hill"
            opcion2 = "Nick Fury"
            opcion3 = "Agente coulson"
            opcion4 = "Dr. Erik Selvig"
            correcta = 3
            break;
        case 7:
            pregunta = "7 - ¿Qué tipo de médico es Stephen Strange?"
            opcion1 = "Neurocirujano"
            opcion2 = "Cirujano cardiotoracico"
            opcion3 = "Cirujano de trauma"
            opcion4 = "Cirujano Plástico"
            correcta = 1
            break;
        case 8:
            pregunta = "8 - Antes de convertirse en Visión, ¿cómo se llama el mayordomo de inteligencia artificial de Iron Man?"
            opcion1 = "Homero"
            opcion2 = "Alfredo"
            opcion3 = "Marvin"
            opcion4 = "Jarvis"
            correcta = 4
            break;
        case 9:
            pregunta = "9 - Cuál es el verdadero nombre de Black Widow?"
            opcion1 = "Natalie Rushman"
            opcion2 = "Natasha Romanoff"
            opcion3 = "Nicole Rohan"
            opcion4 = "Naya Rabe"
            correcta = 2
            break;
        case 10:
            pregunta = "10 - ¿Quién chasquea los dedos en Avengers:Endgame para vencer a Thanos?"
            opcion1 = "Hulk"
            opcion2 = "Gamora"
            opcion3 = "Tony Stark"
            opcion4 = "Capitana Marvel"
            correcta = 3
            break;
        default:
            pregunta = "No es una pregunta valida"
            opcion1 = ""
            opcion2 = ""
            opcion3 = ""
            opcion4 = ""
            correcta = ""
            break;
    }

    respuesta = Number(prompt(`${pregunta}:
    1 - ${opcion1}
    2 - ${opcion2}
    3 - ${opcion3}
    4 - ${opcion4}`));

    if (respuesta === correcta) {
        puntaje = puntaje + 1
    }
}

alert(`Tu puntaje final es ${puntaje}`);

