const main = document.querySelector(".main-line");
const navBar = document.querySelector(".nav-bar");

main.addEventListener("click", ()=> {
    main.classList.toggle("close")
    navBar.classList.toggle("show");
});