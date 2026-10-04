document.addEventListener('DOMContentLoaded', () => {
    // Basic navigation active state logic
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('./', ''))) {
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active to current
            if (link.getAttribute('href') !== 'index.html' || currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
                 link.classList.add('active');
            }
        }
    });

    console.log("Modern College MVP Initialized");

    // Dark Theme Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    function setSunIcon() {
        if(themeIcon) {
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        }
    }

    function setMoonIcon() {
        if(themeIcon) {
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        setSunIcon();
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                setSunIcon();
            } else {
                localStorage.setItem('theme', 'light');
                setMoonIcon();
            }
        });
    }
});
