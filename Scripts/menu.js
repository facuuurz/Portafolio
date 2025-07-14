const nav = document.getElementById("nav-header");
const boton = document.getElementById("menu-boton");

let visible = false;

boton.addEventListener("click", () => {
    visible = !visible;

    if (visible) {
        nav.classList.remove("hidden", "animate-fade-out-up");
        nav.classList.add("animate-fade-in-down");
    } else {
        nav.classList.remove("animate-fade-in-down");
        nav.classList.add("animate-fade-out-up");

        setTimeout(() => {
        nav.classList.add("hidden");
        }, 500);
    }
});
