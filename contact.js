document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (replace with actual submission process)
    setTimeout(function() {
      document.getElementById('messageContainer').innerHTML = `<p class="success-message">Message sent successfully!</p>`;
    }, 1000);
  });
  