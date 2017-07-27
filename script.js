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

var nbHomme = nombreHomme(classe1);
console.log("le nombre d'hommes de la classe 1 est de " + nbHomme);

var nbHomme = nombreHomme(classe2);
console.log("le nombre d'hommes de la classe 2 est de " + nbHomme);
