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


    // CONTACT FORM

    const contactForm = document.getElementById('contactForm');
    const formSubmit = document.getElementById('formMessage');

    contactForm.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
      event.preventDefault(); // stop the browser's normal submit (the page navigation)

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formSubmit.textContent = "Thanks for your message! I'll get back to you soon.";
          contactForm.reset(); // Reset the form after successful submission
        } else {
          formSubmit.textContent = "Oops! There was a problem submitting your form.";
        }
      } catch (error) {
        formSubmit.textContent = "Error Occurred: " + error.message;
      }
    }

    
    
