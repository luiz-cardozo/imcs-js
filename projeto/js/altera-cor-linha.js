var linhas = document.getElementsByTagName("tr");
percorreArrayPacientes(linhas, function(tr) {
	tr.addEventListener("mouseover", function(){
		this.setAttribute("bgcolor", "grey");
	})
});