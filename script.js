function encriptar() {
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var textCifrado = texto.replace(/e/igm,"enter");
	var textCifrado = textCifrado.replace(/o/igm,"ober");
	var textCifrado = textCifrado.replace(/i/igm,"imes");
	var textCifrado = textCifrado.replace(/a/igm,"ai");
	var textCifrado = textCifrado.replace(/u/igm,"ufat");

	document.getElementById("munheco").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = textCifrado;
	document.getElementById("btn-copiar").style.display = "show";
	document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var textCifrado = texto.replace(/enter/img,"e");
	var textCifrado = textCifrado.replace(/ober/img,"o");
	var textCifrado = textCifrado.replace(/imes/img,"i");
	var textCifrado = textCifrado.replace(/ai/img,"a");
	var textCifrado = textCifrado.replace(/ufat/img,"u");

	document.getElementById("munheco").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = textCifrado;
	document.getElementById("btn-copiar").style.display = "show";
	document.getElementById("btn-copiar").style.display = "inherit";
}

function copy() {
	var contenido = document.querySelector("#texto2");
	contenido.select();
	document.execCommand("copy");
}