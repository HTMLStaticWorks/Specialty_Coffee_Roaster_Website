document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Theme Toggle (Dark Mode)
    const themeToggles = document.querySelectorAll('#theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggles.forEach(btn => {
            btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        });
    };

    if (currentTheme === 'dark') {
        applyTheme('dark');
    }

    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(theme);
        });
    });

    // RTL Toggle
    const rtlToggles = document.querySelectorAll('#rtl-toggle');
    const currentDir = localStorage.getItem('dir') || 'ltr';

    const applyDir = (dir) => {
        document.documentElement.setAttribute('dir', dir);
        localStorage.setItem('dir', dir);
        rtlToggles.forEach(btn => {
            btn.innerHTML = dir === 'rtl' ? 'LTR' : 'RTL';
        });
    };

    if (currentDir === 'rtl') {
        applyDir('rtl');
    }

    rtlToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const dir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
            applyDir(dir);
        });
    });

    // Password Toggle
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
});
