function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
    let regBtn = document.getElementById("regBtn");
    let terminosCheckbox = document.getElementById("terminos");
  
    regBtn.addEventListener("click", function () {
      
  terminosCheckbox.checked = true;
  
      document.getElementById("alert-success").classList.add("show");
    });
  });