/* ========================================
   COMMON.JS - Shared functions for all pages
   ======================================== */

// Function to set active nav item based on current page
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
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

// Check for saved dark mode preference
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Add toggle button to header
function addDarkModeToggle() {
    const userInfoDiv = document.querySelector('.user-info');
    if (userInfoDiv && !document.querySelector('.dark-mode-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.onclick = toggleDarkMode;
        userInfoDiv.insertBefore(toggleBtn, userInfoDiv.firstChild);
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavItem();
    initDarkMode();
    addDarkModeToggle();
});