console.log("javascript is connected");


// USED BY Home and About pages

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




const title = "JayMeister Development";
const message = "Hi! My name is Jay Braun. I help small businesses with all their website needs.";
const typingTitle = document.getElementById("typing-title");
const typingMessage = document.getElementById("typing-message");
let i = 0;

function type() {
  if (i < title.length) {
    typingTitle.textContent += title[i];
    i++;
    setTimeout(type, 180.5); // adjust speed here (lower = faster)
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
    setTimeout(typeMessage, 47); // adjust speed here (lower = faster)
  } else {
    typingMessage.classList.remove("typing-cursor"); // remove cursor when done
  }
}
typeMessage();

// END //



function loseTheGame() {
      alert("😈 You just lost The Game.");
    }


    // USED BY Contact page

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', validateForm);

    function validateForm(event) {
      event.preventDefault(); // Prevent form submission
    }

    function submitForm() {
      // Perform form validation here (if needed)
      // If validation passes, you can submit the form
      contactForm.submit();
    }
    
