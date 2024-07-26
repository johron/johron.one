//let greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "Привет", "こんにちは", "你好", "안녕하세요", "مرحبا", "नमस्ते", "Hej", "Hallo", "Γειά σου", "Ahoj", "Szia", "Selam", "שלום"];
let greetings = ["Hello", "Hola", "Hallo"]
let currentTick = 0;
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
    if (currentTick == 0) { currentTick++; }
    fadeOut(greet_element);
    setTimeout(function() {
        greet_element.innerHTML = greetings[currentTick];
        fadeIn(greet_element);
        currentTick = (currentTick + 1) % greetings.length;
    }, fadeDuration);
}, 2500);