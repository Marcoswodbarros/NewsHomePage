function showMenu() {
    let openMenu = document.querySelector('.nav__ul');
    let menuIcons = document.querySelector('.nav__menu--icons');

    if (openMenu.classList.contains('nav__ul--expanded')) {
        openMenu.classList.remove('nav__ul--expanded');
        menuIcons.src = 'assets/images/icon-menu.svg';

    } else {
        openMenu.classList.add('nav__ul--expanded');
        menuIcons.src = 'assets/images/icon-menu-close.svg';
    }

}
