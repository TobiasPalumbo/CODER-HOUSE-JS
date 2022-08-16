const btnswitch = document.querySelector(".switch");
const containerSwitch = document.querySelector(".switch-container")
let bgMode = true
let bgLocalStorage


document.addEventListener("DOMContentLoaded",()=>{

    if( JSON.parse(localStorage.getItem("color-mode")) === true){
        document.body.classList.add("bg-dark");
        btnswitch.classList.add("active");
        bgMode = false
    }else{
        document.body.classList.remove("bg-dark");
        btnswitch.classList.remove("active");
    }
    


btnswitch.addEventListener("click", ()=>{
    if(bgMode){
        localStorage.setItem("color-mode",JSON.stringify(true) )
        bgMode=false
    }else{
        localStorage.setItem("color-mode",JSON.stringify(false) )
        bgMode = true
    }
    let bgLocalStorage =JSON.parse(localStorage.getItem("color-mode"))
    if(bgLocalStorage){
        document.body.classList.add("bg-dark");
    }else{
        document.body.classList.remove("bg-dark");
    }
    
    btnswitch.classList.toggle("active");
    console.log(bgLocalStorage)
})

})