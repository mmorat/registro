function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.getElementById("regBtn").addEventListener("click", function () {
 const formLabel = document.getElementsByClassName("form-control")
   let texto = 0
 for (let i = 0; i < formLabel.length; i++) {
    const element = formLabel[i];
    if (element.value !== "") {
        texto++;
    }
 }
 if (texto >= 5) {
    showAlertSuccess()
 } else {
    showAlertError()
 }})



