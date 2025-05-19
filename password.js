const form = document.getElementById('forgetPasswordForm');
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Reset messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    const emailValue = emailInput.value.trim();

    if(validateEmail(emailValue)) {
      // Simulate sending reset password link
      successMessage.style.display = 'block';
      form.reset();
    } else {
      errorMessage.style.display = 'block';
      emailInput.focus();
    }
  });

  function validateEmail(email) {
    // Simple email regex for validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }


