// Coffee Shop & Roastery - Main JavaScript File

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionality
    initThemeToggle();
    initRtlToggle();
    initMobileMenu();
    initActiveNavigation();
    initFormValidation();
    initScrollEffects();
    initAnimations();
    initSmokeEffect();
});

// ===== Theme Toggle =====
function initThemeToggle() {
    const html = document.documentElement;

    // Apply saved theme (default to light)
    const savedTheme = localStorage.getItem('coffeeTheme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    // Wire up every theme-toggle button on the page (desktop + mobile)
    const toggleBtns = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const current = html.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('coffeeTheme', next);
        });
    });
}


// ===== RTL Toggle =====
function initRtlToggle() {
    const html = document.documentElement;
    const rtlBtns = document.querySelectorAll('#rtl-toggle, .rtl-btn');

    // Apply saved layout
    const savedRtl = localStorage.getItem('coffeeRtl') === 'true';
    if (savedRtl) {
        html.setAttribute('dir', 'rtl');
    } else {
        html.removeAttribute('dir');
    }

    rtlBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const isRtl = html.getAttribute('dir') === 'rtl';
            if (isRtl) {
                html.removeAttribute('dir');
                localStorage.setItem('coffeeRtl', 'false');
            } else {
                html.setAttribute('dir', 'rtl');
                localStorage.setItem('coffeeRtl', 'true');
            }
        });
    });
}

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// ===== Active Navigation Highlight =====
function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace('.html', '').replace('#', '');

        if (linkPage === currentPage ||
            (currentPage === 'index' && linkPage === 'home') ||
            (currentPage === 'home2' && linkPage === 'home-2')) {
            link.classList.add('active');
        }
    });
}

// ===== Form Validation =====
function initFormValidation() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const contactForm = document.getElementById('contactForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateLoginForm()) {
                showSuccessMessage('Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateRegisterForm()) {
                showSuccessMessage('Registration successful! Redirecting to login...');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateContactForm()) {
                showSuccessMessage('Message sent successfully! We\'ll get back to you soon.');
                contactForm.reset();
            }
        });
    }
}

function validateLoginForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;

    // Reset errors
    hideError(email);
    hideError(password);

    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Validate password
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    return isValid;
}

function validateRegisterForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    let isValid = true;

    // Reset errors
    hideError(name);
    hideError(email);
    hideError(password);
    hideError(confirmPassword);

    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Validate password
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword.value) {
        showError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

function validateContactForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Reset errors
    hideError(name);
    hideError(email);
    hideError(message);

    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    } else if (message.value.length < 10) {
        showError(message, 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');

    input.style.borderColor = '#e74c3c';
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function hideError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');

    input.style.borderColor = '';
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage(message) {
    // Remove existing success messages
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(successDiv);

    // Auto remove after 3 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => successDiv.remove(), 300);
        }
    }, 3000);
}

// ===== Scroll Effects =====
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Header shadow on scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });
}

// ===== Animations =====
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .menu-item, .section-title');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Add to Cart Functionality =====
function addToCart(itemName, price) {
    let cart = JSON.parse(localStorage.getItem('coffeeCart')) || [];

    // Check if item already exists
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem('coffeeCart', JSON.stringify(cart));
    updateCartCount();
    showSuccessMessage(`${itemName} added to cart!`);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('coffeeCart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Update cart count display if element exists
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// ===== Loading Animation =====
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="coffee-loader"></div>';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;

    const coffeeLoader = document.createElement('div');
    coffeeLoader.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #FFB300;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;

    loader.appendChild(coffeeLoader);
    document.body.appendChild(loader);

    return loader;
}

function hideLoading(loader) {
    if (loader && loader.parentNode) {
        loader.remove();
    }
}

// ===== CSS Animations =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===== Smoke Effect Generator =====
function initSmokeEffect() {
    const heroes = document.querySelectorAll('.hero, .about-hero, .menu-hero, .gallery-hero, .blog-hero, .contact-hero, .hero-alt');
    
    heroes.forEach(hero => {
        const smokeOverlay = document.createElement('div');
        smokeOverlay.className = 'smoke-overlay';
        hero.appendChild(smokeOverlay);

        // Generate 15 particles for a rich effect
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'smoke-particle';
            
            // Randomize particle properties
            const size = Math.random() * 200 + 100;
            const left = Math.random() * 120 - 10;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 10;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            smokeOverlay.appendChild(particle);
        }
    });
}

// ===== Initialize Cart Count on Page Load =====
updateCartCount();
