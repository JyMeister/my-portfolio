console.log("javascript is connected");

const toggleButton = document.getElementById('darkModeToggle');
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Optional: Change button text/icon
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️ Light Mode';
    } else {
      toggleButton.textContent = '🌙 Dark Mode';
    }
  });




const title = "Welcome to my Portfolio!";
const typingTitle = document.getElementById("typing-title");
let i = 0;

function type() {
  if (i < title.length) {
    typingTitle.textContent += title[i];
    i++;
    setTimeout(type, 150); // adjust speed here (lower = faster)
  } else {
    typingTitle.classList.remove("typing-cursor"); // remove cursor when done
  }
}
type();




