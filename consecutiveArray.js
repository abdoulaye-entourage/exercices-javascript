function findMissingLetter(array) {
  let i = array[0].charCodeAt();
  //La méthode charCodeAt() retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16 d'un caractère de la chaîne situé à une position donnée.
  array.map((x) => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
