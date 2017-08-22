function calculopesoideal(){

	var altura=document.getElementById("altura").value;
	 altura=altura.toString().replace(',','.');
	var alturaMetro=altura/100;

	var peso=document.getElementById("peso").value;
	
	var indiceComplexion=document.getElementById("complexion").selectedIndex;
	var complexion=document.getElementById("complexion").options[indiceComplexion].value;	
	
	if(altura==""){
			document.getElementById("errorPesoIdeal").innerHTML="Por favor, introduce tu altura.";
	}
	else if(altura<0){
			document.getElementById("errorPesoIdeal").innerHTML="La altura que introduzca debe ser positiva.";
	}
	else if(altura<20){
			document.getElementById("errorPesoIdeal").innerHTML="Ha introducido la altura en metros. Por favor, multipliquela por 100 para introducirla en centimetros.";
	}
	else{
			document.getElementById("errorPesoIdeal").innerHTML="";
			if(peso==""){
				document.getElementById("errorPesoIdeal").innerHTML="Por favor, introduce tu peso.";
			}
			else if(peso<0){
					document.getElementById("errorPesoIdeal").innerHTML="El peso que introduzca debe ser positivo.";
			}
			else{
				document.getElementById("errorPesoIdeal").innerHTML="";
				
				/*CALCULO IMC*/
				var alturaCuadrado=alturaMetro*alturaMetro;
				var imc=peso/alturaCuadrado;
				document.getElementById("IMC").value=Math.round(imc*100)/100;			
				/*CALCULO DESCRIPCION IMC*/
				if(imc<16){
					document.getElementById("IMCdetallado").value="Delgadez Severa";		
				}
				else if(imc<17){
					document.getElementById("IMCdetallado").value="Delgadez Moderada";		
				}
				else if(imc<18.5){
					document.getElementById("IMCdetallado").value="Delgadez Aceptable";		
				}
				else if(imc<25){
					document.getElementById("IMCdetallado").value="Peso Normal";		
				}
				else if(imc<30){
					document.getElementById("IMCdetallado").value="Sobrepeso";		
				}
				else if(imc<35){
					document.getElementById("IMCdetallado").value="Obeso: Tipo I";		
				}
				else if(imc<40){
					document.getElementById("IMCdetallado").value="Obeso: Tipo II";		
				}
				else if(imc>45){
					document.getElementById("IMCdetallado").value="Obeso: Tipo III";		
				}
				/*CALCULO PESO IDEAL*/
				var pesoBase=altura-100;
				if(sexo=="hombre"){
					pesoIdeal=pesoBase*0.90;
					if(complexion=="pequena"){
						pesoIdeal=pesoIdeal-2.5;					
						document.getElementById("pesoIdeal").value=Math.round(pesoIdeal*100)/100;			
					}
					if(complexion=="mediana"){
						pesoIdeal=pesoIdeal;					
						document.getElementById("pesoIdeal").value=Math.round(pesoIdeal*100)/100;			
					}
					if(complexion=="grande"){
						pesoIdeal=pesoIdeal+6.5;					
						document.getElementById("pesoIdeal").value=Math.round(pesoIdeal*100)/100;			
					}
				}
				else if(sexo=="mujer"){
					pesoIdeal=pesoBase*0.90;
					if(complexion=="pequena"){
						pesoIdeal=pesoIdeal-2.5;					
						document.getElementById("pesoIdeal").value=Math.round(pesoIdeal*100)/100;			
					}
					if(complexion=="mediana"){
						pesoIdeal=pesoIdeal;					
						document.getElementById("pesoIdeal").value=Math.round(pesoIdeal*100)/100;			
					}
					if(complexion=="grande"){
						pesoIdeal=pesoIdeal+6;					
						document.getElementById("pesoIdeal").value=Math.round(pesoIdeal*100)/100;			
					}
				}
				/*CALCULO PESO MAXIMO*/
				pesoMaximo=alturaCuadrado*25;
				document.getElementById("pesoMaximo").value=Math.round(pesoMaximo*100)/100;		
				/*CALCULO PESO MINIMO*/		
				pesoMinimo=alturaCuadrado*18.5;
				document.getElementById("pesoMinimo").value=Math.round(pesoMinimo*100)/100;	
		}
	}
}


