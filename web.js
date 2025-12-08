document.addEventListener('DOMContentLoaded', function() {

    // --- Toggle Menu Hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // --- Modal Login ---
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('login-error');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        loginError.style.display = 'none';
        loginForm.reset();
    });

    window.addEventListener('click', (e) => {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Simulasi Login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const validUsername = 'admin';
        const validPassword = 'nusantara';

        if (username === validUsername && password === validPassword) {
            alert('Login berhasil! Selamat datang kembali.');
            loginModal.style.display = 'none';
            loginForm.reset();
            // Di aplikasi nyata, Anda bisa mengubah UI tombol login menjadi nama user
        } else {
            loginError.textContent = 'Username atau Password salah!';
            loginError.style.display = 'block';
        }
    });

    // --- Filter Menu ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hapus class active dari semua tombol
            filterBtns.forEach(b => b.classList.remove('active'));
            // Tambahkan class active ke tombol yang diklik
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else {
                    if (item.getAttribute('data-category') === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // --- Form Kontak ---
    const kontakForm = document.getElementById('kontakForm');
    if (kontakForm) {
        kontakForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.');
            kontakForm.reset();
        });
    }
});