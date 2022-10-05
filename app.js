//Se declaran variables

let usuario;
let favoritos = JSON.parse (localStorage.getItem('PeliculasFavoritas')) || [];
let carrito = JSON.parse (localStorage.getItem('PeliculasEnCarrito')) || [];
const body = document.querySelector("body");
const botonCarrito = document.querySelector("#botonCarrito");
botonCarrito.addEventListener("click", () => {
    carrito.length != 0 && abrirCarrito();
})


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
    body.style.overflow = "hidden";
    let campo = document.querySelector("#nombreUsuario");
    campo.addEventListener("input", (e) => {
        nombre = e.target.value;
    });
    let ingreso = document.querySelector("#ingresoUsuario");
    ingreso.addEventListener("click", () => {
        campo.value = ""
        cerrarModal(pantallaIngreso);
        nombre != undefined ? nombre : nombre = "usuario";
        validarUsuario(nombre);
    })
}

function setButton(inBtn, addedClass, newId, container, action, reference) {
    let btn = document.createElement("button");
    btn.classList.add(addedClass);
    btn.id = newId;
    btn.innerHTML += inBtn;
    container.appendChild(btn);
    btn.addEventListener("click", () => {
        btn = "";
        action(reference);
    }) 
}

function cerrarModal(param) {
    param.style.display = "none";
    body.style.overflow = "auto";
}

const mostrarPeliculas = async() => {
    const response = await fetch('data.json')
    const todasPeliculas = await response.json()

    let catalogo = document.getElementById("todasCards");
    while (catalogo.hasChildNodes()) {
        catalogo.removeChild(catalogo.firstChild);
    }

    todasPeliculas.forEach((pelicula, indice) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div>
                <img src="./imagenes/${pelicula.miniatura}.jpg" alt="catalogo de peliculas">
            </div>
            <div class="cardInfo">
                <div class="cardText">
                    <h4>${pelicula.nombre}</h4>
                    <p>Duración: ${pelicula.duracion} min</p>
                    <p>Género: ${pelicula.genero}</p>
                    <p>Precio: $${pelicula.precio}</p>   
                </div>
            </div>`
    catalogo.appendChild(card)
    
    card.addEventListener("click", () => {
        mostrarInfo(todasPeliculas, indice)
    })

    })

    let favoritas = document.querySelector("#favoritasCards");
    let ftitulo = document.querySelector("#favTitulo");
    if (favoritos.length > 0) {
        while (favoritas.hasChildNodes()) {
            favoritas.removeChild(favoritas.firstChild);
        }
        favoritos.forEach((fpelicula, findice) => {
            let fcard = document.createElement("div");
            fcard.classList.add("card");
            fcard.innerHTML = `
                <div>
                    <img src="./imagenes/${fpelicula.miniatura}.jpg" alt="catalogo de peliculas">
                </div>
                <div class="cardInfo">
                    <div class="cardText">
                        <h4>${fpelicula.nombre}</h4>
                        <p>Duración: ${fpelicula.duracion} min</p>
                        <p>Género: ${fpelicula.genero}</p>
                        <p>Precio: $${fpelicula.precio}</p>   
                    </div>
                </div>`
        ftitulo.style.display = "block"
        favoritas.appendChild(fcard)

        fcard.addEventListener("click", () => {
            mostrarInfo(favoritos, findice)
        })
        })
} else {
    ftitulo.style.display = "none"
    favoritas.hasChildNodes() && favoritas.removeChild(favoritas.firstChild);
}
} 

function mostrarInfo(array, indice) {
    const item = array[indice];
    let {nombre, resumen, director, duracion, genero, estreno, clasificacionEdad, calificacionIMDB, precio, poster} = item;
    let modalInfo = document.querySelector("#modalInfoPelicula");
    let itemInfo = document.createElement("div");
    itemInfo.classList.add("modalInfoContent");
    modalInfo.innerHTML = "";
    itemInfo.innerHTML = `<div class="divImagen">
    <img src="./imagenes/${poster}.jpg" alt="poster">
    </div>
    <div>
        <div>
            <h3>${nombre}</h3>
            <p>${resumen}</p>
            <p>Director: ${director}</p>
            <p>Duración: ${duracion} min.</p>
            <p>Género: ${genero}</p>
            <p>Año de estreno: ${estreno}</p>
            <p>Clasificación por edad: Para mayores de ${clasificacionEdad} años</p>
            <p>Calificación de IMDB: ${calificacionIMDB}</p>
            <p>Mirala por $ ${precio}</p>
        </div>
    </div>`
    modalInfo.appendChild(itemInfo);

    let peliculaEncontradaFavoritos = favoritos.findIndex((elemento) => {
        return elemento.nombre === item.nombre
    });
    let btnFavText;
    peliculaEncontradaFavoritos === -1 ? btnFavText = "Agregar a favoritos" : btnFavText = "Quitar de favoritos";

    let peliculaEncontradaCarrito = carrito.findIndex((elemento) => {
        return elemento.nombre === item.nombre
    });
    let btnCartText;
    peliculaEncontradaCarrito === -1 ? btnCartText = "Agregar al carrito" : btnCartText = "Quitar del carrito";
    
    setButton(btnFavText, "botonModal", "btnFav", itemInfo, agregarFavoritos , item);
    setButton(btnCartText, "botonModal", "btnCart", itemInfo, agregarCarrito, item);
    setButton("Volver", "botonModal", "btnVolver", itemInfo, cerrarModal, modalInfo);

    modalInfo.style.display = "block";
    body.style.overflow = "hidden";
}

function agregarFavoritos(item) {
    let peliculaEncontrada = favoritos.findIndex((elemento) => {
        return elemento.nombre === item.nombre
    });
    peliculaEncontrada === -1 ? favoritos.push(item) : favoritos.splice(peliculaEncontrada, 1);
    
    const favoritosStr = JSON.stringify(favoritos);
    localStorage.setItem("PeliculasFavoritas", favoritosStr);

    let textoBoton = document.querySelector("#btnFav");
    textoBoton.innerHTML = "";
    let btnFavText;
    let textoNotificacion;
    if (favoritos.includes(item)) {
        btnFavText = "Quitar de favoritos"
        textoNotificacion = `${item.nombre} fue agregado a favoritos`
    } else {
        btnFavText = "Agregar a favoritos"
        textoNotificacion = `${item.nombre} fue quitado de favoritos`
    }

    textoBoton.innerHTML = btnFavText;

    mostrarPeliculas();

    mostrarNotificacion(textoNotificacion);
}

function agregarCarrito(item) {
    let peliculaEncontrada = carrito.findIndex((elemento) => {
        return elemento.nombre === item.nombre
    });
    peliculaEncontrada === -1 ? carrito.push(item) : carrito.splice(peliculaEncontrada, 1);

    const carritoStr = JSON.stringify(carrito);
    localStorage.setItem("PeliculasEnCarrito", carritoStr);

    modificarContadorCarrito();

    let textoBoton = document.querySelector("#btnCart");
    let btnCartText;
    let textoNotificacion;
    if (carrito.includes(item)) {
        btnCartText = "Quitar del carrito"
        textoNotificacion = `${item.nombre} fue agregado al carrito`
    } else {
        btnCartText = "Agregar al carrito"
        textoNotificacion = `${item.nombre} fue quitado del carrito`
    }
    
    textoBoton.innerHTML = btnCartText;

    mostrarNotificacion(textoNotificacion);
}


function modificarContadorCarrito () {
    let carritoContainer = document.querySelector("#carrito");
    let contadorCarrito = document.createElement("p");
    carritoContainer.innerHTML = ""
    if (carrito.length > 0) {
        contadorCarrito.innerHTML = `${carrito.length}`;
        carritoContainer.appendChild(contadorCarrito);
    }
}

function abrirCarrito() {
    let total = 0;
    let modalCart = document.querySelector("#modalCart")
    let modalCarrito = document.querySelector("#modalCarrito");
    modalCarrito.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((pelicula) => {
            total = total + pelicula.precio;
            let modalContent = document.createElement("div");
            modalContent.classList.add("descripcionPelicula");
            modalContent.innerHTML = `<img src="./imagenes/${pelicula.miniatura}.jpg" alt="matrix">
            <p>${pelicula.nombre}</p>
            <p>$${pelicula.precio}</p>`
            modalCarrito.appendChild(modalContent);
        })
        let montoTotal = document.createElement("div");
        montoTotal.classList.add("montoTotal");
        montoTotal.innerHTML= "";
        montoTotal.innerHTML = `<h4>Total de la compra: $${total}</h4>`
        modalCarrito.appendChild(montoTotal)

        let acciones = document.createElement("div");
        acciones.classList.add("accionesCarrito");
        acciones.innerHTML = "";
        acciones.innerHTML = `<button onClick="finalizarCompra()">Finalizar compra</button>
            <button onClick="cerrarModal(modalCart)">Volver</button>`
        modalCarrito.appendChild(acciones)
    }
    modalCart.style.display = "block";
    body.style.overflow = "hidden";  
}

function mostrarNotificacion(notificacion) {
    Toastify({
        text: notificacion,
        duration: 2000,
        gravity: "bottom",
        className: "toastifyNotification",
        style: {
            background: "linear-gradient(to right, #4741A6, #9bbbfce5)",
        }
        }).showToast();
}

function finalizarCompra(){
    modalCarrito.innerHTML = "";
    cerrarModal(modalCart); 

    Swal.fire({
        title: 'Estás a un paso de disfrutar del mejor cine',
        text: "¿Confirmar compra?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Volver',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Compra realizada',
            'Traé el pochoclo y disfrutá de la película',
            'success'
        )
        carrito = [];
        modificarContadorCarrito();
        const carritoStr = JSON.stringify(carrito);
        localStorage.setItem("PeliculasEnCarrito", carritoStr);
        }
      })
}

// Fin de funciones

ingresarUsuario();
mostrarPeliculas();
modificarContadorCarrito ();
