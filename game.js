// This runs automatically when the page loads
window.onload = function() {
    const music = document.getElementById('bg-music');

    // Call the input setup and pass what should happen when tapped
    setupInput(() => {
        // 1. Play the music
        music.play().catch(err => console.log("Audio requires interaction first"));
        
        // 2. Trigger the animations from render.js
        renderOpenSequence();
    });
};
