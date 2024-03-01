function showSignUpForm() {
    document.querySelector('.contact-form').classList.add('hidden');
    document.querySelector('.signup-form').classList.remove('hidden');
  }
  
  function showLoginForm() {
    document.querySelector('.signup-form').classList.add('hidden');
    document.querySelector('.contact-form').classList.remove('hidden');
  }
  