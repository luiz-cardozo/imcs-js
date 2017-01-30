var peso = 0;
var altura = 0;

if(altura > 0){
	var imc = peso / (altura * altura); 
	console.log(imc);
} else {
	console.log("Altura inválida");
}