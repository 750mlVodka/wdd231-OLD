const msg = document.getElementById('visitor-msg');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    msg.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysPassed = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1) {
        msg.textContent = "Back so soon! Awesome!";
    } else {
        msg.textContent = `You last visited ${daysPassed} day${daysPassed > 1 ? 's' : ''} ago.`;
    }
}

localStorage.setItem('lastVisit', now);
