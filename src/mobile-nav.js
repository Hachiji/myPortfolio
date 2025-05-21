const mobileNav = () => {
    const menuBtn = document.querySelector('.menu__icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__links');

    if (!menuBtn || !mobileNav) return;
    let isMenuOpen = false;
    
    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;

        if(isMenuOpen === true) { 
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};

export default mobileNav;