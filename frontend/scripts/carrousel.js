document.querySelectorAll(".btn-next").forEach(btn => {
    btn.addEventListener("click", () => {
        const carrossel = btn.parentElement.querySelector(".carrossel");
        carrossel.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    });
});
document.querySelectorAll(".btn-prev").forEach(btn => {
    btn.addEventListener("click", () => {
        const carrossel = btn.parentElement.querySelector(".carrossel");
        carrossel.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    });
});

document.querySelector(".btn-prev")
.addEventListener("click", () => {
    carrossel.scrollBy({
        left: -320,
        behavior: "smooth"
    });
});