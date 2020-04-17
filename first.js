const slider = document.querySelector(".slider");
const tl = new TimelineMax();

tl.fromTo(
    slider,
    2.5, { x: "100%" }, { x: "0%", ease: Power2.easeInOut },
    "-=1"
);

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7}s";
            }
        });
        // console.log(index);
        burger.classList.toggle("toggle");
    });
};

navSlide();