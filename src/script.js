
//Menu Hamburguer JavaScript settings
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    console.log("Botão de hambúrguer clicado");
    
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");

    console.log("Classe 'active' adicionada/removida do menu de navegação e do botão de hambúrguer");
});





