const hamburgerIcon = document.getElementsByClassName("hamburger-menu")[0];
const closeIcon = document.getElementsByClassName("close-icon")[0];
const navOptions = document.getElementById("nav-bar").children[1].children[0];

// Hamburger Menu
closeIcon.addEventListener('click', () =>{
    navOptions.classList.toggle('mobile');
    hamburgerIcon.classList.toggle('show-hamburger-icon');
    closeIcon.classList.toggle('show-close-icon');
});

hamburgerIcon.addEventListener('click', ()=>{
    navOptions.classList.toggle('mobile');
    hamburgerIcon.classList.toggle('show-hamburger-icon');
    closeIcon.classList.toggle('show-close-icon');
});
