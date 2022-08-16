let carrito = [];
const section = document.querySelector(".productos-section");
const modalCart = document.querySelector(".modal-cart");
const cantidadCarrito = document.querySelector(".cart-cantidad")

const llamarProductos = async() =>{
    try{
        // Agregando los objetos al DOM
        let response = await fetch("/stock.json")
        let stock = await response.json()
            stock.forEach(el=>{
                let div = document.createElement("div")
                div.classList.add("productos")
                div.innerHTML = `
                <img src="${el.img} " alt="" class="img-productos">
                <div class="nombre-container">
                <span class="marca">${el.marca}</span>
                </div>
                <h4 class="nombre">${el.nombre}</h4>
                <p class="precio">$${el.precio}</p>
                <button id="add-carrito-${el.id}" class="btn-add"><i class="fa-solid fa-cart-arrow-down"></i></button>
            `;  let h4 = document.querySelector(".nombre")
                section.appendChild(div);
                const boton = document.getElementById(`add-carrito-${el.id}`);
                boton.addEventListener("click", ()=>{
                agregarAlcarrito(el.id)
        });
    })
    
    //Agrargando el producto al array carrito
    const agregarAlcarrito = (prodId) => {
        const existe = carrito.some(prod => prod.id === prodId);
        if(existe){
            const prod = carrito.map(prod =>{
                if(prod.id === prodId){
                    prod.cantidad++
                }
            })
        }else{
                const item = stock.find((prod) => prod.id === prodId);
        carrito.push(item);
        localStorage.setItem("carrito",JSON.stringify(carrito))
        }
        agregarAlModalCart()
        console.log(carrito);
    };
}
    catch(error){
        console.log(error)
    }
}
llamarProductos()


//Agregando LocalStorage

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        agregarAlModalCart()
    }
})  





//Vaciar carrito

emptyCart.addEventListener("click",()=>{
    carrito.length = 0;
    agregarAlModalCart();
})




// Eliminar del carrito

    const eliminarDelCarrito = (productoId)=>{
        let item = carrito.find((producto) => producto.id === productoId);
        let index = carrito.indexOf(item);
        carrito.splice(index, 1);
        agregarAlModalCart();
    };


//Botonos de sumar y resta del carrito

const sumar = (prodId) =>{
    let item = carrito.find((producto) => producto.id === prodId);
    item.cantidad++
    agregarAlModalCart()
}
const restar = (prodId)=>{
    let item = carrito.find((producto) => producto.id === prodId);
    
    if(item.cantidad > 1){
        item.cantidad--
    }
    agregarAlModalCart()
}

//Agrargando el producto al modal carrito

    const agregarAlModalCart = () =>{
        modalCart.innerHTML = ""
        carrito.forEach((producto)=>{
            let div = document.createElement("div");
            div.className = (`producto-cart`);
            div.innerHTML=`
            <img src="${producto.img}" class="img-producto-cart"/>
            <span class="modal-nombre">${producto.nombre}</span>
            <span class="modal-price">$${producto.precio}</span>
            <span id="cantidad"><span><i class="fa-solid fa-minus" id="restar" onclick="restar(${producto.id})"></i></span>${producto.cantidad}<span><i class="fa-solid fa-plus" id="sumar" onclick="sumar(${producto.id})" ></i></span></span>
            <button onclick = "eliminarDelCarrito(${producto.id})" class="btn-eliminar"> <i class="fa-solid fa-trash-can"></i></button>
            `
            modalCart.appendChild(div)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
        cantidadCarrito.innerHTML = carrito.length
        precioTotal.innerHTML = "$" + carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0 );
    };




//SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay:2000,
    },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable:true,
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }, 
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    },
});


// BUSQUEDA DE PRODUCTOS

    // const searchProduct = document.querySelector("#busqueda-input");
    // const targetProducto = document.querySelector(".productos");
    //     function buscarProducto(input,selector){
    //         document.addEventListener("keyup",e =>{
    //             if(e.target.matches(input)){
    //                 console.log(e.key)
    //             }
    //         })
    // }

    // buscarProducto(searchProduct, targetProducto )

