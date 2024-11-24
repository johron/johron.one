let greetings = ["Hi", "Hola", "Hei"];
let currentTick = 0;
let isFirstTick = true;
let fadeDuration = 750;

document.addEventListener('DOMContentLoaded', function() {
    const clockElement = document.createElement('p');
    clockElement.id = 'clock';
    document.body.appendChild(clockElement);
    updateClock();
    setInterval(updateClock, 1000);
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    // Scroll to the first section on page load
    scrollToSection(0);

    document.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        scrollToSection(currentSection);
    });

    const downArrow = document.getElementById('down-arrow');
    downArrow.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(currentSection + 1); // Assuming the projects section is the second section
    });

    function fadeIn(element) {
        element.style.opacity = 0;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = Math.min(progress / fadeDuration, 1);
            if (progress < fadeDuration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    function fadeOut(element) {
        element.style.opacity = 1;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = Math.max(1 - progress / fadeDuration, 0);
            if (progress < fadeDuration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    setInterval(function() {
        let greet_element = document.querySelector(".greet");
        if (greet_element) { // Check if the element exists
            if (isFirstTick) currentTick += 1;
            fadeOut(greet_element);
            setTimeout(function() {
                greet_element.innerHTML = greetings[currentTick];
                fadeIn(greet_element);
                currentTick = (currentTick + 1) % greetings.length;
                isFirstTick = false;
            }, fadeDuration);
        }
    }, 2500);
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