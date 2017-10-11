function evaluar(){
	var p01a = document.getElementById("p01a").checked;
	var p01b = document.getElementById("p01b").checked;
	var p01c = document.getElementById("p01c").checked;
	var p01d = document.getElementById("p01d").checked;

	console.log(p01a + " " + p01b+ " " + p01c+ " " + p01d);

	if(p01b==true){
		document.getElementById("pp01a").style.color = "black"; 
		document.getElementById("pp01b").style.color = "green"; 
		document.getElementById("pp01c").style.color = "black"; 
		document.getElementById("pp01d").style.color = "black"; 
	}else if(p01a== true){
		document.getElementById("pp01a").style.color = "red"; 
		document.getElementById("pp01b").style.color = "black"; 
		document.getElementById("pp01c").style.color = "black"; 
		document.getElementById("pp01d").style.color = "black"; 

	}
	else if(p01c== true){
		document.getElementById("pp01a").style.color = "black"; 
		document.getElementById("pp01b").style.color = "black"; 
		document.getElementById("pp01c").style.color = "red"; 
		document.getElementById("pp01d").style.color = "black"; 

	}
	else if(p01d== true){
		document.getElementById("pp01a").style.color = "black"; 
		document.getElementById("pp01b").style.color = "black"; 
		document.getElementById("pp01c").style.color = "black"; 
		document.getElementById("pp01d").style.color = "red"; 

	}

}
