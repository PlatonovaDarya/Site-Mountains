const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');


burgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block'
})

menuClose.addEventListener('click', () => {
    mobileMenu.style.display = 'none'
})
