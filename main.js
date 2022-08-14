const stock = [
    {id:1 , nombre: "Andador" ,precio: 1200, cantidad: 1 , img: "img/f1.webp", marca:"Kiddy"  },
    {id:2 , nombre: "Triciclo" ,precio: 1300 , cantidad: 1 , img: "img/tri.jpg", marca:"TinnoKids"  },
    {id:3 , nombre: "Cochesito" ,precio: 1400 , cantidad: 1 , img: "img/coche.jpg", marca:"Felcraf"},
    {id:4 , nombre: "Bañadera" ,precio: 1500 , cantidad: 1 , img: "img/bañadera.webp", marca:"Kiddy"  },
    {id:5 , nombre: "Gimnasio" ,precio: 1700 , cantidad: 1 , img: "img/gym.webp", marca:"Bebesit"  },
    {id:6 , nombre: "Butaca" ,precio: 1900 , cantidad: 1 , img: "img/senna.webp", marca:"Felcraf"  },
    {id:7 , nombre: "Triciclo con Barral" ,precio: 1200 , cantidad: 1 , img: "img/Little-Trike-Girl.webp", marca:"Felcraf"  },
    {id:8 , nombre: "Monopatin" ,precio: 1100 , cantidad: 1 , img: "img/mono.jpg", marca:"Love"  },
    {id:9 , nombre: "Caminador" ,precio: 1200, cantidad: 1 , img: "img/caminador-rondi-first-steps-bebe-didactico-andador-3-.jpg", marca:"TinnoKids"},
    {id:10 , nombre: "Silla 3 en 1" ,precio: 1300 , cantidad: 1 , img: "img/silla-3en1.webp", marca:"Bebesit",  },
    {id:11 , nombre: "Coche con huevito" ,precio: 1400 , cantidad: 1 , img: "img/coche-huevito.webp", marca:"Bebesit"},
    {id:12 , nombre: "Aro de baño" ,precio: 1500 , cantidad: 1 , img: "img/aro-bano.jpg", marca:"Love"  },
    {id:13 , nombre: "Gimnasio" ,precio: 1700 , cantidad: 1 , img: "img/gyin2.webp", marca:"Love"  },
    {id:14 , nombre: "Butaca booster" ,precio: 1900 , cantidad: 1 , img: "img/butaca2.jpg", marca:"Kiddy"  },
    {id:15 , nombre: "Silla de comer" ,precio: 1200 , cantidad: 1 , img: "img/SILLA-POCKET.jpg", marca:"Pocket"},
    {id:16 , nombre: "Silla Mimzy" ,precio: 1100 , cantidad: 1 , img: "img/silla-mimzy.webp", marca:"Minzy"  },
];
let carrito = [];
const section = document.querySelector(".productos-section");
const modalCart = document.querySelector(".modal-cart");
const cantidadCarrito = document.querySelector(".cart-cantidad")


//Agregando LocalStorage

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        agregarAlModalCart()
    }
})
// Agregando los objetos al DOM

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
        `;
        section.appendChild(div);
        const boton = document.getElementById(`add-carrito-${el.id}`);

        boton.addEventListener("click", ()=>{
            agregarAlcarrito(el.id)
        });
    });


//Vaciar carrito

emptyCart.addEventListener("click",()=>{
    carrito.length = 0;
    agregarAlModalCart();
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

// Eliminar del carrito

    const eliminarDelCarrito = (productoId)=>{
        let item = carrito.find((producto) => producto.id === productoId);
        let index = carrito.indexOf(item);
        carrito.splice(index, 1);
        agregarAlModalCart();
    };
//Agrargando el producto al modal carrito

    const agregarAlModalCart = () =>{
        modalCart.innerHTML = ""
        carrito.forEach((producto)=>{
            let div = document.createElement("div");
            div.className = (`producto-cart`);
            div.innerHTML=`
            <img src="${producto.img}" class="img-producto-cart"/>
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <p>Cantidad:<span id="cantidad" >${producto.cantidad}</span></p>
            <button onclick = "eliminarDelCarrito(${producto.id})" class="btn-eliminar"> <i class="fa-solid fa-trash-can"></i></button>
            `
            modalCart.appendChild(div)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
        
        cantidadCarrito.innerHTML = carrito.length
        precioTotal.innerHTML = "$" + carrito.reduce((acc, producto) => acc + producto.precio, 0 );
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


