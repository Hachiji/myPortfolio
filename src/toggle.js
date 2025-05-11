export function toggleMenu(iconSelector, menuSelector, backBtnSelector) {
    const menuIcon = document.querySelector(iconSelector);
    const headerMenu = document.querySelector(menuSelector);
    const backBtn = document.querySelector(backBtnSelector);


    menuIcon.addEventListener('click', () => {
        headerMenu.classList.toggle('active');

        if (headerMenu.classList.contains('active')) {
            backBtn.style.display = 'block';
        }
        else {
            backBtn.style.display = 'none';
        }
    });

    backBtn.addEventListener('click', () => {
        headerMenu.classList.remove('active');
        backBtn.style.display = 'none';
        window.history.back();
    })
}
