function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var aceptoTerminos = document.getElementById('terminos').checked;
  
    if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '' ) {
        showAlertError();
    } else if (password1.length < 6 || password2.length < 6) {
        showAlertError();
    } else if (password1 !== password2) {
        showAlertError();
    } else if (!aceptoTerminos) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
  })