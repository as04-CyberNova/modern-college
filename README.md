# Modern College MVP

A modern, responsive, and beautifully designed static frontend MVP (Minimum Viable Product) for a college or university website. Built with a "University-meets-SaaS" aesthetic, this project focuses on providing an excellent user experience, clean typography, and essential student/visitor features without the bloat of heavy frameworks.

## 🌟 Features

- **Modern UI/UX:** Clean, accessible design featuring CSS variables, flexbox/grid layouts, subtle shadows, and hover micro-animations.
- **Global Dark Mode:** A fully functional dark theme toggle that persists user preference via `localStorage`.
- **Responsive Design:** Mobile-first approach ensuring the website looks great on desktops, tablets, and smartphones.
- **Interactive Notices:** A dedicated notices page with real-time JavaScript-based category filtering and searching.
- **Dedicated Academic Branches:** Over 10 beautifully structured pages detailing different engineering and management branches.
- **Student Portal (Mock):** A separated student dashboard application featuring mock authentication and dynamic tab navigation (Overview, Timetable, Attendance, Results) without page reloads.
- **Zero Dependencies:** Built entirely with Vanilla HTML5, CSS3, and JavaScript. No external libraries, meaning near-instant load times.

## 📂 Project Structure

```text
├── css/
│   └── style.css            # Global design system, variables, and public styles
├── js/
│   └── main.js              # Global scripts (Dark mode, active nav state, etc.)
├── pages/
│   ├── academics.html       # Directory of all academic branches
│   ├── admissions.html      # Admission info and calls-to-action
│   ├── alumni.html          # Alumni networking page
│   ├── careers.html         # Job openings and HR contact
│   ├── notices.html         # Interactive notices and announcements
│   ├── placements.html      # Placement statistics and recruiters
│   ├── events.html          # Upcoming college events
│   └── [branch-name].html   # 10 dedicated pages for specific branches (CSE, ME, etc.)
├── portal/
│   ├── css/
│   │   └── portal.css       # Specific styling for the dashboard app
│   ├── js/
│   │   └── portal.js        # Mock auth, session management, and tab switching
│   ├── login.html           # Portal login interface
│   └── dashboard.html       # Student dashboard interface
└── index.html               # Main landing page (Homepage)
```

## 🚀 How to Run

Because this is a static frontend project with zero build steps or dependencies, running it is incredibly simple:

1. Clone or download this repository.
2. Open the project folder.
3. Double-click on `index.html` to open it directly in any modern web browser (Chrome, Firefox, Edge, Safari).
4. *Optional:* Use an extension like VS Code's "Live Server" for auto-reloading during development.

### Testing the Student Portal
To test the mock authentication in the Student Portal:
- **Username:** `STU2026`
- **Password:** `password`

## 🛠️ Future Roadmap (Full-Stack Upgrade)

To take this MVP to a production-ready application, the following backend integrations are recommended:
1. **Backend Server:** Implement a Node.js/Express, Python/Flask, or Java/Spring backend to serve data dynamically.
2. **Database:** Connect a database (PostgreSQL, MongoDB, or MySQL) to store student records, real notices, and event data.
3. **Authentication:** Replace the frontend `localStorage` mock with secure JWT or session-based authentication and hashed passwords using `bcrypt`.
4. **Dynamic Forms:** Connect the "Apply Now" and "Contact" forms to backend endpoints to capture and email submissions.

## 📄 License
This project is open-source and free to use for educational and institutional purposes.
