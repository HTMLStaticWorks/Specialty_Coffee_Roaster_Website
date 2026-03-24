import os
import re

directory = r'c:\Users\prath\OneDrive\Desktop\Websites\75websites\Coffee'

svg_logo = '''<svg class="logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>'''

def get_header(filename):
    is_auth = filename in ['login.html', 'register.html']
    active_class = ""
    if filename == 'index.html': active_class = "Home"
    elif filename == 'home2.html': active_class = "Home 2"
    elif filename == 'dashboard.html': active_class = "Dashboard"
    elif filename == 'menu.html': active_class = "Offerings"
    elif filename == 'about.html': active_class = "Heritage"
    elif filename == 'contact.html': active_class = "Connect"

    header = f'''    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <!-- Left Corner: Logo and Brand -->
            <a href="index.html" class="logo" style="text-decoration: none;">
                <div class="logo-icon">
                    {svg_logo}
                </div>
                <span>Brewora</span>
            </a>
'''
    if not is_auth:
        header += f'''
            <!-- Centered: Nav Menus -->
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link {"active" if active_class == "Home" else ""}">Home</a></li>
                <li><a href="home2.html" class="nav-link {"active" if active_class == "Home 2" else ""}">Home 2</a></li>
                <li><a href="dashboard.html" class="nav-link {"active" if active_class == "Dashboard" else ""}">Dashboard</a></li>
                <li><a href="menu.html" class="nav-link {"active" if active_class == "Offerings" else ""}">Offerings</a></li>
                <li><a href="about.html" class="nav-link {"active" if active_class == "Heritage" else ""}">Heritage</a></li>
                <li><a href="contact.html" class="nav-link {"active" if active_class == "Connect" else ""}">Connect</a></li>
            </ul>

            <!-- Right Corner: Theme Toggle, RTL, and SignUp -->
            <div class="nav-buttons">
                <button class="rtl-btn" id="rtl-toggle" aria-label="Toggle RTL"></button>
                <button id="theme-toggle" class="theme-btn" aria-label="Toggle dark mode">
                    <span class="theme-icon-light">☀️</span>
                    <span class="theme-icon-dark">🌙</span>
                </button>
                <a href="register.html" class="btn btn-primary nav-btn">SignUp</a>
            </div>

            <!-- Hamburger (360px, 768px) -->
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
'''
    header += '''        </nav>
    </header>'''
    return header

header_pattern = re.compile(r'<!-- Header -->.*?<header class="header">.*?</header>', re.DOTALL)
footer_logo_pattern = re.compile(r'<div class="logo-icon"><img src="images/logo-icon\.png" alt="Brewora Logo"></div>', re.IGNORECASE)
footer_logo_replacement = f'<div class="logo-icon">{svg_logo}</div>'

for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace header
        content = header_pattern.sub(get_header(filename), content)
        # Replace footer logo
        content = footer_logo_pattern.sub(footer_logo_replacement, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
