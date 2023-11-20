function descendingOrder(n) {
  // convertir les chiffres en chaine de caractère
  // séparer le resultat avec la methode split().
  // trier les chiffres de façon desordonnée
  // utiliser la methode join() pour joindre
  // revoyer le resultat en Number par un return
  let descendingOrderNumber = n
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .reverse()
    .join("");
  return Number(descendingOrderNumber);
}
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
