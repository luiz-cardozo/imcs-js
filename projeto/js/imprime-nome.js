var dadosPacientes = document.getElementsByClassName("paciente"); //array de pacientes


percorreArrayPacientes(dadosPacientes, function imprimeNome(pacienteAtual){
	//declarado como variável para fazer atribuição posterior
	var imc = pacienteAtual.getElementsByClassName("info-imc")[0];

	var paciente = {
		nome : pacienteAtual.getElementsByClassName("info-nome")[0].textContent,
		peso : pacienteAtual.getElementsByClassName("info-peso")[0].textContent,
		altura : pacienteAtual.getElementsByClassName("info-altura")[0].textContent,
		imcPaciente : function(){
			if(paciente.altura > 0){
				return this.peso / (this.altura * this.altura); 
			}else{
			console.log("Altura inválida");
			}
		}
	};

	console.log(paciente.nome);
});
