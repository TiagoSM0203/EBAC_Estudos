document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.burguer');
    const mobileMenu = document.querySelector('.mobile-menu');

    const closeMenu = () => {
        menuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
    }

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 999) {
            closeMenu();
        }
    })

})