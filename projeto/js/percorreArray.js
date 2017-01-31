function percorreArrayPacientes(dadosPacientes, comportamento){

	for(var i = 0; i < dadosPacientes.length; i++){
		var pacienteAtual = dadosPacientes[i];

		comportamento(pacienteAtual);
	}

}