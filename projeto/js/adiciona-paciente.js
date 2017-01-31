//document.querySelectorAll("table") //Retora um Array de tabelas

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){

	event.preventDefault(); //impede o comportamento padrão - no caso do form impede o submit e recarregamento da página

	var nome = document.querySelector("#campo-nome");
	var peso = document.querySelector("#campo-peso");
	var altura = document.querySelector("#campo-altura");

	var novoPaciente = 	"<tr class='paciente'>"+
							"<td class='info-nome'>"+nome.value+"</td>"+ //pega o valor do que foi preenchido no campo
							"<td class='info-peso'>"+peso.value+"</td>"+
							"<td class='info-altura'>"+altura.value+"</td>"+
							"<td class='info-imc'></td>"+
						"</tr>";

	var tabela = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + novoPaciente;

	nome.value = "";
	peso.value = "";
	altura.value = "";

});
