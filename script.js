const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//Abrir Carta
btnAbrir.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");  
    
    const h1 = document.querySelector("h1");
    const h3 = document.querySelector("h3");
    const img = document.querySelector("img");
    h1.style.transform = "translateY(-120px)";
    h3.style.transform = "translateY(-120px)";
    img.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.6s ease-in-out";
    h3.style.transition = "transform 0.6s ease-in-out";
    img.style.transition = "transform 0.6s ease-in-out";

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");

    setTimeout(() => {
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
        ElementoSuperior.style.zIndex = -1;
    }, 700);
});

//Cerrar Carta
btnCerrar.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");

    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("abrir-mensaje");

    setTimeout(() => {
        const h1 = document.querySelector("h1");
        const h3 = document.querySelector("h3");
        const img = document.querySelector("img");
        h1.style.transform = "translateY( 0px)";
        h3.style.transform = "translateY( 0px)";
        img.style.transform = "translateY( 0px)";
    
        const IconoCorazon = document.querySelector(".bx");
        IconoCorazon.classList.remove("bx-rotada");
    
        ElementoSuperior.style.zIndex = 0;
        ElementoSuperior.classList.remove("abrir-superior");
    }, 700);
});

//Abrir con Click en la Carta
const contenedor = document.querySelector("#AbrirContenedor");
contenedor.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");  
    
    const h1 = document.querySelector("h1");
    const h3 = document.querySelector("h3");
    const img = document.querySelector("img");
    h1.style.transform = "translateY(-120px)";
    h3.style.transform = "translateY(-120px)";
    img.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.6s ease-in-out";
    h3.style.transition = "transform 0.6s ease-in-out";
    img.style.transition = "transform 0.6s ease-in-out";

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");

    setTimeout(() => {
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
        ElementoSuperior.style.zIndex = -1;
    }, 700);

})