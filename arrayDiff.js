function arrayDiff(a, b) {
  // declarer une tableau vide appeler  : result[]
  // pacourir les elements de la liste A pour savoir si un element n'est pas dans la liste B. 
  // ajouter l'element qui n'y est pas au tableau result[]
  let result  = []

  for (let listElement of a) {
    if(!b.includes(listElement)) {
        result.push(listElement)
    }
  }
  return result
}

console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log((arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]"));
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]");