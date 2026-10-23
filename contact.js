// CONTACT FORM

    const contactForm = document.getElementById('contactForm');
    const formSubmit = document.getElementById('formMessage');
    const sendMessage = document.getElementById('sendMessage');

    formSubmit.textContent = "Send me a message!";
    
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
