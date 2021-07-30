const loadMobileMenu = () =>{
    const hamburgerMenu = (document.getElementsByClassName("hamburger-menu"))[0];
    hamburgerMenu.style.display = 'none';
    const closeButton = document.createElement('img');
    closeButton.src = '/images/icon-close.svg';
    closeButton.className = 'close-button';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click',hideMobileMenu = () =>{
        closeButton.style.display = 'none';
        hamburgerMenu.style.display = 'flex';
        (((document.getElementById('nav-bar')).children[1]).children[0]).style.display='none';
        
    });
    (document.getElementById('nav-bar')).appendChild(closeButton);
    (((document.getElementById('nav-bar')).children[1]).children[0]).style.display='block';
   
}
