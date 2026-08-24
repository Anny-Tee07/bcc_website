const menuBtn = document.querySelector(".navbar-toggler");

menuBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});