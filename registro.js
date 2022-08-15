const nombreUsuario = document.querySelector("#nombre");
const emailUsuario = document.querySelector("#email");
const passwordUsuario = document.querySelector("#password");
const form = document.querySelector("#form");
const alertas = document.querySelector(".warnings");
const logIn = document.querySelector("#log-in");
const userInfo = document.querySelector(".user-info")
const sectRegister = document.querySelector("#sect-register")
const containerLogin = document.querySelector("#container-login")
//CONTRUCTOR DE USUARIOS
let usuarios = [];
class Usuario {
    constructor(nombre, email, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña
    }
} 
let nameUser
let emailUser
let passUser
let User
let getUsuario
let refesh
document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("usuario")){
        sectRegister.classList.add("d-none")
        usuarios = JSON.parse(localStorage.getItem("usuario"))
        console.log(usuarios)
        console.log(usuarios.find((el)=>el.nombre === "Tobias"))
        let usuariofind = usuarios.find((el)=>el.nombre === "Tobias")
        console.log(usuarios.indexOf(usuariofind))
        let usuarioInd = usuarios.indexOf(usuariofind)
        
        // let valoresUsario = Object.values(getUsuario);
        usuarios.forEach(el => {
                userInfo.innerHTML = `
                <div><span class="valor-user">${el.nombre}<span></div>
                <div><span class="valor-user">${el.email}<span></div>
                <span class="valor-user"><a href="" style="font-weight:500" id="log-out">log-out</a></span>
                `
            });
            const logOut = document.querySelector("#log-out")
            
            logOut.addEventListener("click",(e)=>{ 
                usuarios.splice(usuarioInd,1)
                localStorage.removeItem("usuario")
                sectRegister.classList.remove("d-none")
            })
            
    }
})
//REGISTRARSE
form.addEventListener("submit", (e)=>{
    // e.preventDefault()
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let warnings =""
    let entrar = false
    alertas.innerHTML = "";
    let nameUser = nombreUsuario.value
    let emailUser = emailUsuario.value
    let passUser = passwordUsuario.value
    if(nameUser.length<6){
        warnings += `El nombre no es valido! </br>`
        entrar = true
    }
    if(!regExEmail.test(emailUser)){
        warnings += `El email no es valida! </br>`
        entrar = true
    }
    if(passUser.length < 8){
        warnings+=`La contraseña no es valida! </br>`
        entrar = true
    }
    if(entrar === true){
        alertas.innerHTML = warnings 
    }else{
        alertas.textContent = "Enviado!" 
        let User = new Usuario(nameUser, emailUser, passUser)
        usuarios.push(User)
        console.log(usuarios)
        localStorage.setItem("usuario",JSON.stringify(usuarios))
        sectRegister.classList.add("d-none")
    }
})



// let valoresUsario = Object.values(getUsuario)
// valoresUsario.forEach(el => {
//     userInfo.innerHTML = `
//     <div><span class="valor-user">${valoresUsario[0]}<span></div>
//     <div><span class="valor-user">${valoresUsario[1]}<span></div>
//     <span class="valor-user"><a href="" style="font-weight:500" id="log-out">log-out</a></span>
//     `
// });
// const logOut = document.querySelector("#log-out")
// // //DESLOGEARSE

// logOut.addEventListener("click",(e)=>{
//     localStorage.removeItem("usuario")
//     sectRegister.classList.remove("d-none")

// })


//LOG-IN DE USUARIOS
logIn.addEventListener("click",(e)=>{
    e.preventDefault()
    containerLogin.classList.add("rotate-vert-center")
    setTimeout(() => {
        containerLogin.innerHTML= `
                    <a class="swipe-left" id="back-register" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    <form class="form-login">
                    <h4 class="title-register">Login</h4>
                    <div class="bloque">
                        <label for="">Email</label>
                        <input type="email" name="" required id="email">
                    </div>
                    <div class="bloque">
                        <label for="">Contraseña</label>
                        <input type="password" name="" required id="password">
                    </div>
                    <div class="btn-container"><button type="submit">Enviar</button></div>
                    <p class="warnings"></p>
                </form>
    `
        refesh =document.querySelector("#back-register")   
    refesh.addEventListener("click", (e)=>{
        e.preventDefault()
        location.reload()
    })
    }, 600);
    
})

