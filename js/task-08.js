
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne reîncărcarea paginii la trimiterea formularului

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Toate câmpurile trebuie completate!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(formData);
    loginForm.reset(); // Resetează valorile câmpurilor formularului
  }
});
