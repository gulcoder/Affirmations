const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servera statiska filer från public-mappen
app.use(express.static(path.join(__dirname, 'public')));

// En enkel route som returnerar affirmation
app.get('/api/affirmation', (req, res) => {
    const affirmations = [
        "I am strong, calm, and capable.",
        "Today is full of opportunities and joy.",
        "I am grateful for the present moment.",
        "I choose peace over worry.",
        "I trust myself and my journey."
    ];
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    res.json({ affirmation: randomAffirmation });
});

// Starta servern
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

