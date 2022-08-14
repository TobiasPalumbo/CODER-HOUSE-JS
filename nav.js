window.addEventListener('scroll',()=>{
    let nav = document.querySelector(".nav-container")
    nav.classList.toggle("down",window.scrollY > 0 );
})