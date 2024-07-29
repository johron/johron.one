let greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "Привет", "مرحبا", "नमस्ते", "Hej", "Γειά σου", "Ahoj", "Szia", "Selam", "שלום"];
let currentTick = 0;
let is_first_tick = true;
let fadeDuration = 500; // duration of the fade animation in milliseconds

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
    let greet_element = document.getElementById("greet");
    if (is_first_tick) currentTick += 1;
    fadeOut(greet_element);
    setTimeout(function() {
        greet_element.innerHTML = greetings[currentTick];
        fadeIn(greet_element);
        currentTick = (currentTick + 1) % greetings.length;
        is_first_tick = false;
    }, fadeDuration);
}, 2500);