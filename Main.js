let menuVisible = false;

//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible){
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    } else {
        document.getElementById("nav").classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("bash");
        habilidades[2].classList.add("htmlcss");
    }
}

//detecto el scroll para aplicar las animaciones
window.onscroll = function () {
    efectoHabilidades();
}