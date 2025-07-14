const nav = document.getElementById("nav-header");
const boton = document.getElementById("menu-boton");

let visible = false;

boton.addEventListener("click", () => {
    visible = !visible;

    if(visible){
        nav.classList.remove("translate-x-full");
        nav.classList.add("translate-x-0");
    }else{
        nav.classList.remove("translate-x-0");
        nav.classList.add("translate-x-full");
    }
});