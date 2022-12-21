/* Para remover caracteres especiales */
function valid(f) {
  f.value = f.value.normalize("NFD").replace(/[^a-z \u00D1\u00F1]*/ig,''); 
}

/* Función para encriptar texto ingresado */
var textoEncriptado;
function encriptar() {
  var textoOriginal = document.getElementById("#input").value;
  textoEncriptado = window.btoa(textoOriginal);
  document.getElementById("#output").value = textoEncriptado;
}

/*
var textoDesencriptado;
function desencriptar() {
  var textoEncriptado = document.getElementById("#input").value;
  textoDesencriptado = window.btoa(textoEncriptado);
  document.getElementById("#output").value = textoDesencriptado;
}
*/ 
