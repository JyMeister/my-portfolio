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
const message = "Welcome to my portfolio website! I'm Jay Braun, a junior web developer with a passion for creating clean, " +
 "functional, and creative websites. This site is a showcase of my skills, projects, and journey in the world of web development. " +
 "Feel free to explore and learn more about me and my work!";
const typingTitle = document.getElementById("typing-title");
const typingMessage = document.getElementById("typing-message");
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

let j = 0;
function typeMessage() {
  if (j < message.length) {
    typingMessage.textContent += message[j];
    j++;
    setTimeout(typeMessage, 50); // adjust speed here (lower = faster)
  }
}
typeMessage();




