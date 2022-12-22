/* Para remover caracteres especiales */
function valid(f) {
  f.value = f.value.normalize("NFD").replace(/[^a-z \u00D1\u00F1]*/ig,''); 
}

/* Función para encriptar texto ingresado */
var clavesEncriptado = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
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
  "ai": "a",
  "enter": "e",
  "imes": "i",
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

