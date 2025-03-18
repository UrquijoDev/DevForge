document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const formTitle = document.getElementById("formTitle");

  // Cambiar entre formularios
  loginButton.addEventListener("click", function () {
    loginButton.classList.add("active");
    registerButton.classList.remove("active");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent = "Iniciar Sesión";
  });

  registerButton.addEventListener("click", function () {
    registerButton.classList.add("active");
    loginButton.classList.remove("active");
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    formTitle.textContent = "Registrarse";
  });

  // Validación del formulario de inicio de sesión
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (!isValidEmail(email)) {
      errorMessage.textContent = "Por favor, ingrese un correo electrónico válido.";
      return;
    }

    if (password.length < 6) {
      errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    alert("Inicio de sesión exitoso. ¡Bienvenido!");
  });

  // Validación del formulario de registro
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const regEmail = document.getElementById("regEmail").value.trim();
    const regPassword = document.getElementById("regPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const regErrorMessage = document.getElementById("regErrorMessage");

    regErrorMessage.textContent = "";

    if (fullName === "") {
      regErrorMessage.textContent = "Por favor, ingrese su nombre completo.";
      return;
    }

    if (dob === "") {
      regErrorMessage.textContent = "Por favor, seleccione su fecha de nacimiento.";
      return;
    }

    if (!isValidEmail(regEmail)) {
      regErrorMessage.textContent = "Por favor, ingrese un correo electrónico válido.";
      return;
    }

    if (regPassword.length < 6) {
      regErrorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    if (regPassword !== confirmPassword) {
      regErrorMessage.textContent = "Las contraseñas no coinciden.";
      return;
    }

    alert("Registro exitoso. ¡Bienvenido!");
  });

  // Función para validar el correo electrónico
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});