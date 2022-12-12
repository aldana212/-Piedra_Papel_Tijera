//llamamos los botones o img y le damos un evento
let button_Stone = document.querySelector(".button_Stone").addEventListener("click", Stone_process);
let button_Paper = document.querySelector(".button_Paper").addEventListener("click", Paper_process);
let  button_Scissors = document.querySelector(".button_Scissors").addEventListener("click", Scissors_process)


let message = document.querySelector(".text-mensajes");
const contenedor = document.querySelector(".conte_compu");
const Elige = document.querySelector(".Elige");


//llamamos las imagenes
const img_Stone = document.querySelector("#Stone").src;
const img_paper = document.querySelector("#Papper").src;
const img_scissor = document.querySelector("#Scissors").src;


//victorias de user y compu 
let Cunter_User = document.querySelector(".rol_user");
let Cunter_Compu = document.querySelector(".rol_compu");


//contador de user
let users = 0 ; 
let maquina = 0;


function Stone_process(){
    let Random = Math.floor(Math.random() * 3) + 1;
    console.log("Random: " + Random);
    document.querySelector(".img-User").setAttribute("src", img_Stone)
    if(Random == 1){
    document.querySelector(".img-Compu").setAttribute("src", img_Stone)
    message.innerHTML = `<div class="alert alert-success" role="alert">!Empate!</div>`
    }else if(Random === 2){
        document.querySelector(".img-Compu").setAttribute("src", img_paper)
        maquina = maquina + 1;
        Cunter_Compu.innerHTML = maquina;
        message.innerHTML = `<div class="alert alert-success" role="alert">!Compu Gano!</div>`
    }else if(Random === 3){
        document.querySelector(".img-Compu").setAttribute("src", img_scissor)
        users = users + 1;
        Cunter_User.innerHTML = users;
        message.innerHTML = `<div class="alert alert-success" role="alert">!User Gano!</div>`
    }
    Game_Over();
}

function Paper_process(){
    let Random = Math.floor(Math.random() * 3) + 1;
    console.log("Random: " + Random);
    document.querySelector(".img-User").setAttribute("src", img_paper)
    if(Random === 1){
        document.querySelector(".img-Compu").setAttribute("src", img_Stone)
        users = users + 1;
        Cunter_User.innerHTML = users;
        message.innerHTML = `<div class="alert alert-success" role="alert">!User Gano!</div>`
    }else if(Random === 2){
        document.querySelector(".img-Compu").setAttribute("src", img_paper)
        message.innerHTML = `<div class="alert alert-success" role="alert">!Empate!</div>`
    }else if(Random === 3){
        document.querySelector(".img-Compu").setAttribute("src", img_scissor)
        maquina = maquina + 1;
        Cunter_Compu.innerHTML = maquina;
        message.innerHTML = `<div class="alert alert-success" role="alert">!Compu Gano!</div>`
    }
    Game_Over();
}

function Scissors_process(){
    let Random = Math.floor(Math.random() * 3) + 1;
    console.log("Random: " + Random);
    document.querySelector(".img-User").setAttribute("src", img_scissor)
    if(Random === 1){
        document.querySelector(".img-Compu").setAttribute("src", img_Stone)
        maquina = maquina + 1;
        Cunter_Compu.innerHTML = maquina;
        message.innerHTML = `<div class="alert alert-success" role="alert">!Compu Gano!</div>`
    }else if(Random === 2){
        document.querySelector(".img-Compu").setAttribute("src", img_paper)
        users = users + 1;
        Cunter_User.innerHTML = users;
        message.innerHTML = `<div class="alert alert-success" role="alert">!User Gano!</div>`
    }else if(Random ===3){
        document.querySelector(".img-Compu").setAttribute("src", img_scissor)
        message.innerHTML = `<div class="alert alert-success" role="alert">!Empate!</div>`
    }
    Game_Over();
}


function Game_Over(){
    if(maquina == 3){
        message.innerHTML = `<div class="alert alert-success" role="alert">!La Maquina te Gano!</div>
        <a href="index.html" class="link">Jugar de nuevo</a>`
        contenedor.style.display = "none";
        Elige.style.display = "none";
    }
    
    else if(users == 3){
        message.innerHTML = `<div class="alert alert-success" role="alert">!Ganaste!</div>
        <a href="index.html" class="link">Jugar de nuevo</a>`
        contenedor.style.display = "none";
        Elige.style.display = "none";
    }
}