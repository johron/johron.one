document.addEventListener('mousemove', function(e) {
    const body = document.getElementById('gradient');
    const x = (e.clientX / window.innerWidth) * 360;
    body.style.background = `linear-gradient(${x}deg, #1D2D63, #151214)`;
});