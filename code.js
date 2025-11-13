// 🌙 Dark Mode Toggle
const themeButton = document.getElementById('themeToggle');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeButton.textContent = '☀️ Light Mode';
  } else {
    themeButton.textContent = '🌙 Dark Mode';
  }
});

// 💌 Contact Form Function
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! 💖\nYour message has been sent successfully.`);
    form.reset();
  } else {
    alert("Please fill all fields before submitting.");
  }
});

