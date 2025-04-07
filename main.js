document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('nome').value;
            const password = document.getElementById('senha').value;

            if (username && password) {

                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }

    const logoutBtn = document.getElementById('sair');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }
    if (window.location.pathname.includes('home.html') ||
        window.location.pathname.includes('somos.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            window.location.href = 'index.html';
        }
    }
});