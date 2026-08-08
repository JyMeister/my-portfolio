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




const title = "Welcome to my Portfolio";
const message = "Hi! My name is Jay Braun. I am a Junior Web Developer.";
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
    setTimeout(typeMessage, 60); // adjust speed here (lower = faster)
  } else {
    typingMessage.classList.remove("typing-cursor"); // remove cursor when done
  }
}
typeMessage();




