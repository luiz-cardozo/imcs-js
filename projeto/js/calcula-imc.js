//cria o objeto/array paciente e pega os valores de peso e altura a partir do ID do elemento
// var paciente = {
// 	"peso" : document.getElementById("peso-2").textContent,
// 	"altura" : document.getElementById("altura-2").textContent
// }

//pega os dados com base na classe utilizada


function calculaImc(paciente){
	if(paciente.altura > 0){
		return paciente.peso / (paciente.altura * paciente.altura); 
	}else{
		console.log("Altura inválida");
	}

}



var dadosPacientes = document.getElementsByClassName("paciente");



for(var i = 0; i <= dadosPacientes.length -1; i++){
	var pacienteAtual = dadosPacientes[i];

	//declarado como variável para fazer atribuição posterior
	var imcPaciente = pacienteAtual.getElementsByClassName("info-imc")[0]

	var paciente = {
		nome : pacienteAtual.getElementsByClassName("info-nome")[0].textContent,
		peso : pacienteAtual.getElementsByClassName("info-peso")[0].textContent,
		altura : pacienteAtual.getElementsByClassName("info-altura")[0].textContent,
	}

	imcPaciente.textContent = calculaImc(paciente);
	console.log(calculaImc(paciente));

}
