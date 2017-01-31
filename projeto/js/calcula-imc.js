//cria o objeto/array paciente e pega os valores de peso e altura a partir do ID do elemento
// var paciente = {
// 	"peso" : document.getElementById("peso-2").textContent,
// 	"altura" : document.getElementById("altura-2").textContent
// }

//pega os dados com base na classe utilizada


// function calculaImc(paciente){
// 	if(paciente.altura > 0){
// 		return paciente.peso / (paciente.altura * paciente.altura); 
// 	}else{
// 		console.log("Altura inválida");
// 	}
// }


function calculaImcPacientes(){
	var dadosPacientes = document.getElementsByClassName("paciente");


	//como funcao anonima
	percorreArrayPacientes(dadosPacientes, function(pacienteAtual){
		

		//declarado como variável para fazer atribuição posterior
		var imc = pacienteAtual.getElementsByClassName("info-imc")[0];

		var paciente = leituraPaciente(pacienteAtual);

		imc.textContent = paciente.imcPaciente();
		console.log(imc);
	});
}

//lê o Id botão do index
var botao = document.getElementById("calcula-imcs");
//Ouve o botão --- usar quando tiver mais de uma ação para ser executada ao mesmo tempo
botao.addEventListener("click", calculaImcPacientes);
botao.addEventListener("click", function(){
	console.log("Realizando cálculo de IMC");
});