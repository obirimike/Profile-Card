const greeting = document.createElement('p');
const hour = new Date().getHours();
greeting.textContent = hour < 12 ? "Good morning ☀️" : "Good afternoon 🌤️";
document.querySelector('.profile-card').prepend(greeting);
