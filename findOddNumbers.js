// initialiser une variable count qui sera la sortie
// faire une boucle sur le tableau pour cherche un numero
//Si le nombre actuel est le même que celui que nous recherchons,  incrément
//  Après avoir obtenu tous les chiffres, nous vérifions le décompte en faisant une division euclidiene de chaque numero.
// si le resultat de la division est différent de 0 alors le chiffre sinon ne renvoit rien.

function findOdd(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return numbers[i];
    }
  }
}
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
