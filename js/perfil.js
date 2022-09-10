function activarcaja() {
    document.getElementById('-Nombre').disabled = false
    document.getElementById('-Edad').disabled = false
    document.getElementById('-Nacionalidad').disabled = false
    document.getElementById('GuardarCambios').style.visibility = 'visible';
}

function desactivarcaja() {
    document.getElementById('-Nombre').disabled = true
    document.getElementById('-Edad').disabled = true
    document.getElementById('-Nacionalidad').disabled = true
    document.getElementById('GuardarCambios').style.visibility = 'hidden';
}   

var valor = true
function FbotonOn() {
  var uno = document.getElementById('botonOn');
  valor?uno.innerText = "Guardar":uno.innerText = "Cambiar foto de perfil 🧑";
  valor=!valor
}
