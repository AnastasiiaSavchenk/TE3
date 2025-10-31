const logForm = document.querySelector('#logForm');

logForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const password = document.querySelector('#password').value.trim();

  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

  const Users = JSON.parse(localStorage.getItem('users')) || [];

  const userReg = Users.find(user => user.name === name);

  if (userReg) {
    if (!regex.test(password)) {
      alert("ERROR: La contraseña debe tener letras y números.");
      return;
    }

    if (userReg.password === password) {
      window.location.href = 'html/bienvenida.html';
    } else {
      alert("Contraseña incorrecta.");
    }
  } else {
    alert("El usuario no está registrado.");
  }
});
