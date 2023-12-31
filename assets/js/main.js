const showMenu = function() {
    let main = document.querySelector('main');
    let openMenu = document.querySelector('.nav__ul');
    let menuIcons = document.querySelector('.nav__menu--icons');

    if (openMenu.classList.contains('nav__ul--expanded')) {
        openMenu.classList.remove('nav__ul--expanded');
        menuIcons.src = 'assets/images/icon-menu.svg';
        main.classList.remove('main__menu--expanded');

    } else {
        openMenu.classList.add('nav__ul--expanded');
        menuIcons.src = 'assets/images/icon-menu-close.svg';
        main.classList.add('main__menu--expanded');
    }
}
