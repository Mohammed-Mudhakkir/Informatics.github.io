const slide_bar=document.querySelector(".slide-bar");
const nav=document.querySelector("nav");

slide_bar.addEventListener("click",() => {
    slide_bar.classList.toggle("active");
    nav.classList.toggle("active");
})