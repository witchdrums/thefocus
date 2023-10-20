window.addEventListener("load", function(){
    foco();
});

function foco(){
    document.querySelector("body").classList.add("oscuridad");
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Desarrollo de Sistemas Web ${anio}`;
    document.body.appendChild(titulo);
}