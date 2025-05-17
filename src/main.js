const cssFiles = [
    './styles/main.css',
    './styles/components/header.css',
    // './styles/components/footer.css',
    './styles/components/hero.css',
    './styles/components/about.css',
    './styles/components/project.css',
    './styles/components/animations.css',
    './styles/util.css'
];

cssFiles.forEach( file => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
});

import { toggleMenu } from "./toggle.js";

toggleMenu('.menu__icon', '.header__menu', '.backBtn', '.darkMode');

