var classe1 = [
{ nom: 'Pierre', age: 40, sexe: 'M' },
{ nom: 'Marie', age: 18, sexe: 'F' },
{ nom: 'Louise', age: 16 , sexe: 'F' },
{ nom: 'Damien', age: 55, sexe: 'M' },
{ nom: 'Louis', age: 19, sexe: 'M' }
];

var classe2 = [
{ nom: 'Elodie', age: 27, sexe: 'F' },
{ nom: 'Christophe', age: 48, sexe: 'M' },
{ nom: 'Aurelie', age: 32, sexe: 'F' },
{ nom: 'Jeanne', age: 15, sexe: 'F' },
{ nom: 'Martin', age: 77, sexe: 'M' },
{ nom: 'Eric', age: 18, sexe: 'M' },
{ nom: 'Jacques', age: 35, sexe: 'M' },
{ nom: 'Eric', age: 47, sexe: 'M' }
];

function nombreHomme (classe) {

	var nbH = 0;
	

	for (var i = 0; i < classe.length; i++) {
		if ( "M" === classe[i].sexe) {
			nbH++;
		}
	}
	return nbH;
};

function proportionHomme(classe){
	var nbH = 0;

	for (var i = 0; i < classe.length; i++) {
		if ( "M" === classe[i].sexe) {
			nbH++;
		}
	}
	nbH = (nbH/classe.length)*100+"%";
	return nbH;

};


function proportionFemme(classe){
	var nbF = 0;

	for (var i = 0; i < classe.length; i++) {
		if ( "F" === classe[i].sexe) {
			nbF++;
		}
	}
	nbF = (nbF/classe.length)*100+"%";
	return nbF;

};

// 1.6. Modifiez la fonction précédente pour quelle puisse prendre en compte le sexe: 
// moyenneAge( classe, sexe = 'T'). L'argument sexe aura une valeur par défaut 'T' (pour Tous) 
// ainsi si l'argument est omis lors de l'appel de la fonction nous ferons une moyenne d'age sur 
// tous si non sur le sexe précisé. Prévoyé un message d'erreur si la valeur passé à l'argument 
// sexe est différente de T,M,F.

function moyenneAge(classe, sexe = "T") {
	var age = 0;
	for (var i = 0; i < classe.length;i++) {
		age += classe[i].age;
	}
	age = age/classe.length;
	return age;
};


// 1.7. Définissez une fonction plusVieux( classe ) qui renvoie l'objet associé à la personne la plus vielle 
// ( On part du principe que toutes les personnes ont un age différent)




console.log("Dans la classe 1 il y a "+nombreHomme(classe1)+" hommes, soit " + proportionHomme(classe1)+" et "+ proportionFemme(classe1)+" de femmes");
console.log("Dans la classe 2 il y a " +nombreHomme(classe2)+" hommes, soit "+ proportionHomme(classe2)+" et "+ proportionFemme(classe2)+" de femmes");

console.log("La moyenne d'âge de la classe 1 est de " + Math.floor(moyenneAge(classe1)) + " ans");
console.log("La moyenne d'âge de la classe 2 est de " + Math.floor(moyenneAge(classe2)) + " ans");

