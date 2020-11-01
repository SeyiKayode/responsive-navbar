const container = document.querySelector(".container");
const main = document.querySelector(".main-line");
const line = document.querySelector(".line");
const body = document.querySelector(".body-nav");

main.addEventListener("click", ()=> {
    main.classList.toggle("close")
    body.classList.toggle("show");
});