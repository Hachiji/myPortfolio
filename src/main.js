const cssFiles = [
    './styles/main.css',
    './styles/components/header.css',
    './styles/components/footer.css',
    './styles/components/mobile-nav.css',
    './styles/components/hero.css',
    './styles/components/about.css',
    './styles/components/project.css',
    './styles/components/contact.css',
    './styles/animations.css',
    './styles/util.css'
];

cssFiles.forEach( file => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
});


import mobileNav from "./mobile-nav.js";
import darkMode from "./themeToggle.js";


mobileNav();
darkMode();
