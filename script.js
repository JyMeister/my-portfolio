console.log("JavaScript is connected");

// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update button text and icon
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
});

// Function for the "The Game" fun fact
function loseTheGame() {
    alert("You just lost The Game!");
}
