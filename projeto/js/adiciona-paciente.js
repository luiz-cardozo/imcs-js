//document.querySelectorAll("table") //Retora um Array de tabelas

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){

	event.preventDefault(); //impede o comportamento padrão - no caso do form impede o submit e recarregamento da página

	var novoPaciente = 	"<tr class='paciente'>"+
							"<td class='info-nome'>Luiz</td>"+
							"<td class='info-peso'>73</td>"+
							"<td class='info-altura'>1.73</td>"+
							"<td class='info-imc'></td>"+
						"</tr>";

	var tabela = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + novoPaciente;

});
