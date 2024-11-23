document.addEventListener('DOMContentLoaded', function() {
    const clockElement = document.createElement('p');
    clockElement.id = 'clock';
    document.body.appendChild(clockElement);
    updateClock();
    setInterval(updateClock, 1000);
});

document.addEventListener('mousemove', function(e) {
    const body = document.getElementById('top');
    const x = (e.clientX / window.innerWidth) * 100;
    body.style.background = `linear-gradient(${x}deg, #04091B, #1D2D63)`;
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timezoneOffset = -now.getTimezoneOffset() / 60;
    const timezone = `UTC${timezoneOffset >= 0 ? '+' : ''}${timezoneOffset}`;
    clock.textContent = `${hours}:${minutes}:${seconds} (${timezone})`;
}