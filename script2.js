var classe0 = [
'Pierre',
'Jacques',
'Marie',
'Louis'
];

/*Fonction qui affiche chaque prénom en utilisant
une boucle*/
function displayClasse( classe ) {
var nom;
var len = classe.length;
	for (var i = 0; i < len; i++) {
		console.log(classe[i]);
	}

	return classe;
}
//Utilisation de la fonction
displayClasse(classe0);


