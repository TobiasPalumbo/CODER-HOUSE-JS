const callModal = document.querySelector("#cart-call");
const crossModal = document.querySelector("#crossModal");
const emptyCart = document.querySelector("#emptyCart");
const modalDisplay = document.querySelector("#modalDisplay");
const precioTotal = document.querySelector("#precio-total");

//Abrir y cerrar el modal

function abrirCerrarModel(){
    modalDisplay.classList.toggle("modal-close")
};

callModal.addEventListener("click", (e)=>{
    e.preventDefault();
    abrirCerrarModel();
});
crossModal.addEventListener("click",() =>{
    abrirCerrarModel();
});

window.addEventListener("click",(e) =>{
    if(e.target === modalDisplay){
        abrirCerrarModel();
    }
});

    