let productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 950,
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 950,
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 950,
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 950,
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 950,
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 950,
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: 950,
    },
    {
        id: 8,
        nombre: "Producto 8",
        precio: 950,
    },
]

const dibujarProductos = () => {
    let contenedor = document.getElementById("container");
    productos.forEach((producto, indice)=> {
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML = ' onClick = agregarAlCarrito(${indice}) '
        contenedor.appendChild(card);
    }
    ) 
}

dibujarProductos();
let cart = [];

const agregarAlCarrito = () => {
    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === productos[indice].id
    });
    if(indiceEncontradoCarrito === -1) {
        const productoAgregar = producto[indice]
        productoAgregar.cantidad = 1;
        cart.push(productoAgregar);
        dibujarCarrito();

    } else {
        cart[indiceEncontradoCarrito].cantidad += 1;
        dibujarCarrito()
    }
    };

    let modalcarrito = document.getElementById("cart")
    let total = 0;
    const dibujarCarrito = () => {
        modalcarrito.className= "cart";
        modalcarrito.innerHTML = "";
        if (cart.length > 0) {
            cart.forEach((productto, indice) => {
                total = total + producto.precio * producto.cantidad;
                const carritoContainer = document.createElement()
            })

        }
    }
