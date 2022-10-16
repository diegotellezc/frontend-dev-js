const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleAside)

function toggleDesktopMenu() {
    const IsAsideClosed = aside.classList.contains("inactive")
    
    if (!IsAsideClosed) {
        aside.classList.add("inactive")
    }
    
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const IsAsideClosed = aside.classList.contains("inactive")
    
    if (!IsAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleAside() {
    const IsMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const IsDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    
    if (!IsMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    } else if (!IsDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
    
    
}