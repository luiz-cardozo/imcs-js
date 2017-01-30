//cria o objeto/array paciente e pega os valores de peso e altura a partir do ID do elemento
var paciente = {
	"peso" : document.getElementById("peso-2").textContent,
	"altura" : document.getElementById("altura-2").textContent
}


if(paciente.altura > 0){
	var imc = paciente.peso / (paciente.altura * paciente.altura); 
	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;
	console.log(imc);
} else {
	console.log("Altura inválida");
}