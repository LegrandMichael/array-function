# array-function

Exercices fonctions et parcours de tableaux

1.1. Partez d'un fichier script.js contenant les deux tableaux suivants

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
1.2. Définissez une fonction nombreHomme( classe ) qui retourne le nombre d'homme puis testez la en ligne de commande ( node script.js )

1.3. Définissez une fonction proportionHomme( classe ) qui renvoie le pourcentage d'homme dans la classe. Utiliser la fonction précédente.

1.4. Définissez une fonction proportionFemme( classe ) en vous servant de la fonction proportionHomme.

1.5. Définissez une fonction moyenneAge( classe ) qui renvoie la moyenne d'age de la classe en tenant compte du sexe.

1.6. Modifiez la fonction précédente pour quelle puisse prendre en compte le sexe: moyenneAge( classe, sexe = 'T'). L'argument sexe aura une valeur par défaut 'T' (pour Tous) ainsi si l'argument est omis lors de l'appel de la fonction nous ferons une moyenne d'age sur tous si non sur le sexe précisé. Prévoyé un message d'erreur si la valeur passé à l'argument sexe est différente de T,M,F.

1.7. Définissez une fonction plusVieux( classe ) qui renvoie l'objet associé à la personne la plus vielle ( On part du principe que toutes les personnes ont un age différent)
