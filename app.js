
const menuDropdown = document.querySelector('menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle("open");
    });
