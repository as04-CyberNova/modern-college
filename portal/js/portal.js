document.addEventListener('DOMContentLoaded', () => {
    
    // Login Logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Clear any previous session
        localStorage.removeItem('student_logged_in');
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const studentId = document.getElementById('studentId').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById('loginError');
            
            // Simple validation mock
            if (studentId.toUpperCase() === 'STU2026' && password === 'password') {
                errorMsg.style.display = 'none';
                localStorage.setItem('student_logged_in', 'true');
                localStorage.setItem('student_id', studentId.toUpperCase());
                window.location.href = 'dashboard.html';
            } else {
                errorMsg.style.display = 'block';
            }
        });
    }

    // Dashboard Logic
    const isDashboard = document.querySelector('.dashboard-layout');
    if (isDashboard) {
        // Auth check
        if (localStorage.getItem('student_logged_in') !== 'true') {
            window.location.href = 'login.html';
            return;
        }

        // Set User Info
        const userNameDisplay = document.getElementById('userNameDisplay');
        if (userNameDisplay) {
            userNameDisplay.textContent = localStorage.getItem('student_id') || 'Student';
        }

        // Sidebar Tab Switching
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a[data-tab]');
        const tabPanes = document.querySelectorAll('.tab-pane');

        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active from all links and panes
                sidebarLinks.forEach(l => l.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                
                // Add active to clicked link
                link.classList.add('active');
                
                // Show corresponding pane
                const tabId = link.getAttribute('data-tab') + 'Pane';
                const pane = document.getElementById(tabId);
                if (pane) {
                    pane.classList.add('active');
                }

                // Close mobile sidebar if open
                const sidebar = document.getElementById('sidebar');
                if (sidebar && window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
        });

        // Logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('student_logged_in');
                localStorage.removeItem('student_id');
                window.location.href = 'login.html';
            });
        }

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');
        
        if (mobileMenuBtn && sidebar) {
            // Show button on mobile
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
            }
            
            window.addEventListener('resize', () => {
                if (window.innerWidth <= 768) {
                    mobileMenuBtn.style.display = 'block';
                } else {
                    mobileMenuBtn.style.display = 'none';
                    sidebar.classList.remove('open');
                }
            });

            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
        }
    }
});
