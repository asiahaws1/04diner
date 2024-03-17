// Inject current year in footer
const newDate = new Date();
document.querySelector('#year').textContent = newDate.getFullYear()

function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;