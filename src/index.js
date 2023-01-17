function home() {
    const nav = document.createElement('nav');
    const main = document.createElement('div');

    main.classList.add('main');
    nav.classList.add('nav');
    

    return nav
}

document.body.appendChild(home());