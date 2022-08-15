//Animacion del nav
window.addEventListener('scroll',()=>{
    let nav = document.querySelector(".nav-container")
    nav.classList.toggle("down",window.scrollY > 0 );
})
//scroll-smooth
window.onload = () =>{
    let links = document.querySelectorAll(".link-nav")
    let primerLink = links[0]
    primerLink.addEventListener("click",()=>{
        scrollSmooth("#inicio", 500, 52)
    })
    let segundoLink = links[1]
    segundoLink.addEventListener("click",()=>{
        scrollSmooth("#inicio", 500, 52)
    })

    let terceroLink = links[2]
    terceroLink.addEventListener("click",()=>{
        scrollSmooth("#section-productos", 500, 52)
    })
    let cuartoLink = links[3]
    cuartoLink.addEventListener("click",()=>{
        scrollSmooth("#sect-register", 500, 52)
    })
}

const scrollSmooth = (objetivo, duracion, compensacion) =>{
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posicionIni = window.pageYOffset
    let tiempoInc = null

    const animacion = tiempoActual =>{
        if(tiempoInc === null) tiempoInc = tiempoActual
            let tiempoPasado = tiempoActual - tiempoInc
            let auxAnimacion = easeInOutQuad(tiempoPasado,posicionIni,elemPos,duracion)
            window.scrollTo(0,auxAnimacion)
            if(tiempoPasado<duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
}
const easeInOutQuad =  (t, b, c, d) => {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};