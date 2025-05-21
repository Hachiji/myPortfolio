const darkMode = () => {
    const themeToggleBtn = document.querySelectorAll('#themeToggle');
    const theme = localStorage.getItem('theme');

    theme && document.body.classList.add(theme);
    
    const handleThemeToggle = () => {
        document.body.classList.toggle('darkMode');
        if (document.body.classList.contains('darkMode')) {
            localStorage.setItem('theme', 'darkMode');
        } else {
            localStorage.removeItem('theme');
        };
    }

    themeToggleBtn.forEach(btn => 
        btn.addEventListener('click', handleThemeToggle)
    );
};


export default darkMode;

