/* ========================================
   COMMON.JS - Shared functions for all pages
   ======================================== */

// Function to set active nav item based on current page
function setActiveNavItem() {
    var currentPage = window.location.pathname.split('/').pop();
    var navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ========================================
// DARK MODE FUNCTIONS
// ========================================

function initDarkMode() {
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function addDarkModeToggle() {
    var userInfoDiv = document.querySelector('.user-info');
    if (userInfoDiv && !document.querySelector('.dark-mode-toggle')) {
        var toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.onclick = toggleDarkMode;
        userInfoDiv.insertBefore(toggleBtn, userInfoDiv.firstChild);
    }
}

// ========================================
// MOBILE SIDEBAR FUNCTIONS
// ========================================

function setupMobileMenu() {
    if (window.innerWidth > 768) return;
    
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.sidebar-overlay');
    
    if (menuBtn && sidebar && overlay) {
        menuBtn.onclick = function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('open');
            if (sidebar.classList.contains('open')) {
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
                sidebar.classList.remove('show-all');
                var showMoreBtn = document.querySelector('.show-more-btn');
                if (showMoreBtn) showMoreBtn.innerHTML = 'Show More ▼';
            }
        };
        
        overlay.onclick = function() {
            sidebar.classList.remove('open');
            sidebar.classList.remove('show-all');
            overlay.style.display = 'none';
            var showMoreBtn = document.querySelector('.show-more-btn');
            if (showMoreBtn) showMoreBtn.innerHTML = 'Show More ▼';
        };
    }
}

function addShowMoreButton() {
    if (window.innerWidth > 768) return;
    
    var sidebar = document.querySelector('.sidebar');
    var navMenu = sidebar ? sidebar.querySelector('.nav-menu') : null;
    
    if (!sidebar || !navMenu) return;
    if (document.querySelector('.show-more-btn')) return;
    
    var showMoreBtn = document.createElement('button');
    showMoreBtn.className = 'show-more-btn';
    showMoreBtn.innerHTML = 'Show More ▼';
    
    showMoreBtn.onclick = function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('show-all');
        
        if (sidebar.classList.contains('show-all')) {
            showMoreBtn.innerHTML = 'Show Less ▲';
        } else {
            showMoreBtn.innerHTML = 'Show More ▼';
        }
    };
    
    navMenu.appendChild(showMoreBtn);
}

function handleResize() {
    var sidebar = document.querySelector('.sidebar');
    var showMoreBtn = document.querySelector('.show-more-btn');
    
    if (window.innerWidth > 768) {
        if (sidebar) {
            sidebar.classList.remove('open', 'show-all');
        }
        if (showMoreBtn) showMoreBtn.remove();
    } else {
        if (!document.querySelector('.show-more-btn')) {
            addShowMoreButton();
        }
        setupMobileMenu();
    }
}

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    setActiveNavItem();
    initDarkMode();
    addDarkModeToggle();
    setupMobileMenu();
    addShowMoreButton();
});

window.addEventListener('resize', function() {
    handleResize();
});