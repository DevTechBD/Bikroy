// navbar header on Scroll
var lastScrollTop = 0
var navbar = document.getElementById("navbar")

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        navbar.style.transition = "0.5s"
        navbar.style.top = "-10vh"
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop
})

const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")

    // Toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")

        // Animate nav
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            } else {
                // console.log(index)
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3.8}s`
            }
        })

        // Burger animation
        burger.classList.toggle("toggle")
    })
}

navSlide()