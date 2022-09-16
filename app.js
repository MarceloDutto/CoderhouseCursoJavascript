//Se crea la estructura de datos con todas las peliculas

function Peliculas(nombre, resumen, estreno, duracion, genero, director, clasificacionEdad, calificacionIMDB, precio, miniatura, poster) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.estreno =estreno;
    this.duracion = duracion;
    this.genero = genero;
    this.director = director;
    this.clasificacionEdad = clasificacionEdad;
    this.calificacionIMDB = calificacionIMDB;
    this.precio = precio;
    this.miniatura = miniatura;
    this.poster = poster;
}

const todasPeliculas = [
    new Peliculas("Matrix", "Un hacker se da cuenta por medio de otros rebeldes de la naturaleza de su realidad y su rol en la guerra contra los controladores.", 1999, 136, "Acción", "Lilly Wachoski/Lana Wachoski", 13, 8.7, 800, "miniatura-matrix", "The-Matrix-poster-resized"), 
    new Peliculas("Interstellar", "Un grupo de exploradores prueban los saltos a través de agujeros de gusano en búsqueda de la sobrevivencia de la humanidad.", 2014, 169, "Ciencia ficción", "Christopher Nolan", 13, 8.6, 1050, "miniatura-interstellar", "interstellar-poster"),
    new Peliculas("The Batman", "Cuando Riddler, un sádico asesino en serie, comienza a asesinar a figuras políticas clave en Gotham, Batman se ve obligado a investigar la corrupción oculta de la ciudad y cuestionar la participación de su familia.", 2022, 176, "Acción", "Matt Reeves", 16, 7.9, 1200, "miniatura-batman", "batman-poster"),
    new Peliculas("Dune", "Adaptación de la novela de ciencia ficción de Frank Herbert, sobre el hijo de una familia noble encargada de proteger un planeta especiado.", 2021, 155, "Ciencia ficción", "Denis Villeneuve", 13, 8.0, 1200, "miniatura-dune", "dune-poster"),
    new Peliculas("Tenet", "Un operativo de la CIA es reclutado por una misteriosa organización para realizar una misión de espionaje internacional más allá del tiempo", 2020, 150, "Acción", "Christopher Nolan", 13, 7.3, 950, "miniatura-tenet", "tenet-poster"),
    new Peliculas("El Señor de los Anillos: La comunidad del anillo", "Un Hobbit y ocho compañeros emprendieron un viaje para destruir el poderoso Anillo Único y salvar a la Tierra del Señor Oscuro Sauron.", 2001, 178, "Fantasía", "Peter jackson", 13, 8.8, 800, "miniatura-comunidadAnillo", "comunidadAnillo-poster"),
    new Peliculas("El Señor de los Anillos: Las dos torres", "Mientras Frodo y Sam se acercan más a Mordor con la ayuda del cambiante Gollum, la comunidad dividida se opone al nuevo aliado de Sauron, Saruman, y sus hordas de Isengard.", 2002, 179, "Fantasía", "Peter jackson", 13, 8.8, 800, "miniatura-dosTorres", "dosTorres-poster"),
    new Peliculas("El Señor de los Anillos: El retorno del Rey", "Gandalf y Aragorn lideran el Mundo de los hombres, e intentarán atraer la atención de Sauron para darle a Frodo la última oportunidad de completar su misión y así tratar de evitar sucumbir a las continuas tentaciones del Anillo.", 2003, 201, "Fantasía", "Peter jackson", 13, 9, 800, "miniatura-retornoRey", "retornoRey-poster"),
    new Peliculas("Milagros inesperados", "La vida de los guardias en el corredor de la muerte se ve afectada por uno de los reclusos: un hombre negro acusado de violar y asesinar a un niño, pero que tiene un misterioso don.", 1994, 142, "Drama", "Frank Darabont", 13, 8.6, 750, "miniatura-milagros", "milagros-poster"),
    new Peliculas("Jurassic Park", "Gracias al ADN fosilizado en ámbar, John Hammond da vida a varias especies de dinosaurios y crea Jurassic Park, un parque temático en una isla de Costa Rica. Pero lo que parecía un sueño se convierte rápidamente en pesadilla.", 1993, 127, "Acción", "Steven Spielberg", 13, 8.2, 800, "miniatura-jurassick", "jurassick-poster"),
    new Peliculas("La lista de Schindler", "Después de presenciar la persecución judía por parte de los nazis en la Polonia ocupada por los alemanes, el empresario Oskar Schindler se preocupa por su fuerza laboral judía.", 1993, 195, "Drama", "Steven Spielberg", 15, 9, 750, "miniatura-schindler", "schindler-poster"),
    new Peliculas("Pulp Fiction", "Cuenta la vida de dos asesinos de la mafia, un boxeador y un pandillero y su esposa, y un par de bandidos se entrelazan en cuatro historias de violencia y redención.", 1994, 144, "Drama", "Quentin Tarantino", 18, 8.9, 750, "miniatura-pulp", "pulp-poster")
];

//Se declaran variables

let usuario;


//Se declaran funciones

function validarUsuario(user) {
    let saludo = document.querySelector("#userName");
    saludo.innerHTML = "";
    usuario = user;
    let frase = document.createElement("h2");
    frase.innerHTML = `Bienvenid@, <span>${usuario}</span>`;
    saludo.appendChild(frase);
}

function ingresarUsuario() {
    let nombre;
    let pantallaIngreso = document.querySelector("#bienvenida");
    pantallaIngreso.style.display = "block";
    let campo = document.querySelector("#nombreUsuario");
    campo.addEventListener("input", (e) => {
        nombre = e.target.value;
    });
    let ingreso = document.querySelector("#ingresoUsuario");
    ingreso.addEventListener("click", () => {
        campo.value = ""
        pantallaIngreso.style.display = "none";
        if (nombre != undefined) {
            validarUsuario(nombre);
        } else {
            nombre = "usuario";
            validarUsuario(nombre);
        }  
    })
}

function mostrarPeliculas() {
    let catalogo = document.getElementById("todasCards");
    todasPeliculas.forEach((pelicula, indice) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div>
        <img src="./imagenes/${pelicula.miniatura}.jpg" alt="catalogo de peliculas">
    </div>
    <div class="cardInfo">
        <div class="cardText">
            <p>Duración: ${pelicula.duracion} min</p>
            <p>Género: ${pelicula.genero}</p>
            <p>Precio: $${pelicula.precio}</p>   
        </div>
    </div>`
    catalogo.appendChild(card)
    card.addEventListener("click", () => {
        mostrarInfo(indice)
    })
    })
}

function mostrarInfo(indice) {
    const item = todasPeliculas[indice];
    let modalInfo = document.querySelector("#modalInfoPelicula");
    let itemInfo = document.createElement("div");
    itemInfo.classList.add("modalInfoContent");
    itemInfo.innerHTML = `<div class="divImagen">
    <img src="./imagenes/${item.poster}.jpg" alt="Matrix poster">
    </div>
    <div>
        <div>
            <h3>${item.nombre}</h3>
            <p>${item.resumen}</p>
            <p>Director: ${item.director}</p>
            <p>Duración: ${item.duracion}</p>
            <p>Género: ${item.genero}</p>
            <p>Año de estreno: ${item.estreno}</p>
            <p>Clasificación por edad: Para mayores de ${item.clasificacionEdad} años</p>
            <p>Calificación de IMDB ${item.calificacionIMDB}</p>
            <p>Mirala por $ ${item.precio}</p>
        </div>
    </div>`
    modalInfo.appendChild(itemInfo);
    let inBtn = "Volver";
    let btn = document.createElement("button");
    btn.classList.add("botonCerrar")
    btn.innerHTML += inBtn;
    itemInfo.appendChild(btn);

    btn.addEventListener("click", () => {
        modalInfo.style.display = "none";
        modalInfo.innerHTML = ""
        modalInfo = ""
        itemInfo.innerHTML = ""
        itemInfo = ""
        btn = ""
    })

    modalInfo.style.display = "block";
}

// Fin de funciones

ingresarUsuario();
mostrarPeliculas();