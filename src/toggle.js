export function toggleMenu(iconSelector, menuSelector, backBtnSelector, ) {
    const menuIcon = document.querySelector(iconSelector);
    const headerMenu = document.querySelector(menuSelector);
    const backBtn = document.querySelector(backBtnSelector);

    const darkModeToggle = document.getElementById('darkMode');
    const icon = darkModeToggle.querySelector('i');

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
    });

    document.addEventListener('DOMContentLoaded', () => {
        const isDark = localStorage.getItem('theme') === 'dark';

        if (isDark) {
            document.body.classList.add('darkMode');

            const icon = document.getElementById('darkMode')?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('darkMode');

        const isDark = document.body.classList.contains('darkMode');

        icon.classList.toggle('fa-sun', !isDark);
        icon.classList.toggle('fa-moon', isDark);

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    
}

