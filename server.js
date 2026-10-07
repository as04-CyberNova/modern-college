const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Mock API endpoint for notices
app.get('/api/notices', (req, res) => {
    res.json([
        { id: 1, title: "Mid-Semester Examination Schedule Fall 2026", date: "Oct 10, 2026", category: "academic", content: "The mid-semester examinations will commence from Oct 25. Check the portal for detailed timetables." },
        { id: 2, title: "Tech Fest 2026 - Call for Volunteers", date: "Oct 08, 2026", category: "event", content: "We are looking for enthusiastic volunteers for the upcoming annual Tech Fest." },
        { id: 3, title: "Campus Drive: Global Tech Corp", date: "Oct 05, 2026", category: "placement", content: "Global Tech Corp is visiting for software engineering roles. Pre-placement talk at 10 AM on Oct 12." },
        { id: 4, title: "Revised Academic Calendar", date: "Oct 01, 2026", category: "academic", content: "The academic calendar has been slightly revised to accommodate the winter break." }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
