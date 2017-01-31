var dadosPacientes = document.getElementsByClassName("paciente"); //array de pacientes


percorreArrayPacientes(dadosPacientes, function imprimeNome(pacienteAtual){
	//declarado como variável para fazer atribuição posterior
	var imc = pacienteAtual.getElementsByClassName("info-imc")[0];

	var paciente = leituraPaciente(pacienteAtual);

	console.log(paciente.nome);
});
