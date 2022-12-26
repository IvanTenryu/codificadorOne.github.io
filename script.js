/* Para remover caracteres especiales */
function valid(f) {
  f.value = f.value.normalize("NFD").replace(/[^a-z \u00D1\u00F1]*/ig,''); 
}

/* Función para encriptar texto ingresado */
var clavesEncriptado = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

function encriptar(str) {
  for (let char in clavesEncriptado) {
      str = str.replace(new RegExp(char, 'g'), clavesEncriptado[char]);
  }
  return str;
}

function textoEncriptado() {
  var str = document.getElementById('texto-original').value;
  document.getElementById('texto-resultado').value = encriptar(str);
}

/* Función para desencriptar texto ingresado */
var clavesDesencriptado = {
  "enter": "e",
  "imes": "i",
  "ai": "a",
  "ober": "o",
  "ober": "o"
};

function desencriptar(str) {
  for (let char in clavesDesencriptado) {
      str = str.replace(new RegExp(char, 'g'), clavesDesencriptado[char]);
  }
  return str;
}

function textoDesencriptado() {
  var str = document.getElementById('texto-original').value;
  document.getElementById('texto-resultado').value = desencriptar(str);
}

/* Función para copiar texto resultante al porta papeles */
function copyText() {
  var copyText = document.getElementById("texto-resultado");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

/* Función para mostrar correo electrónico */
function mostrarCorreo() {
  alert("ivanvalenciaps4@gmail.com")
}
