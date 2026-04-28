document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a[data-section]');
    const sections = document.querySelectorAll('.dashboard-section');
    const sectionTitle = document.getElementById('section-title');
    const sectionTitleMobile = document.getElementById('section-title-mobile');
    const sectionSubtitle = document.getElementById('section-subtitle');

    const subtitles = {
        'overview': "Here's what's happening with your account today.",
        'place-order': "Stock up on your favorite roasts and supplies.",
        'order-history': "Review your past orders and recurring subscriptions.",
        'track-shipments': "Monitor your current deliveries in real-time.",
        'invoices': "Manage your billing and account statements.",
        'brewing-guides': "Master your bar with our extraction recipes.",
        'training-material': "Access advanced resources to train your coffee professionals.",
        'account-settings': "Manage your profile, security, and preferences."
    };

    const dashboardHamburger = document.getElementById('dashboard-hamburger');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.querySelector('.sidebar');

    if (dashboardHamburger) {
        dashboardHamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }

    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            sidebar && 
            !sidebar.contains(e.target) && 
            dashboardHamburger && 
            !dashboardHamburger.contains(e.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const sectionId = link.getAttribute('data-section');
            
            // Update active link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });

            // Update header text
            const newTitle = link.textContent;
            sectionTitle.textContent = newTitle;
            if (sectionTitleMobile) sectionTitleMobile.textContent = newTitle;
            
            if (sectionSubtitle) sectionSubtitle.textContent = subtitles[sectionId] || "";
            
            // Special case for Overview title
            if (sectionId === 'overview') {
                const overviewTitle = "Overview";
                sectionTitle.textContent = overviewTitle;
                if (sectionTitleMobile) sectionTitleMobile.textContent = overviewTitle;
            }

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

});
