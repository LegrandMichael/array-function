// Méthode 1 
//-----------
function tabMultiply (nombre) {

	for (var i = 0; i < 10; i++) {
		var opeG = i + 1;
		var res = opeG * nombre;

		if (opeG.toString().length !== 2) {
			console.log("0" + opeG + " x " + nombre + " = " + res);
		} else {
			console.log(opeG + " x " + nombre + " = " + res);
		}
	}

	return res;

}
tabMultiply(5);

// Méthode 2
//------------
// function tabMultiply (nombre) {

// 	for (var i = 0; i < 10; i++) {
	
// 		console.log((i + 1) + " x " + nombre + " = " + (nombre *(i + 1)));
// 	}

// 	return nombre;

// }

// tabMultiply(9);