function hammingDistance(string1, string2) {
  // comparer les deux chaine pour obtenir la plus courte grâce à la méthod Math.min()
  // faire unee iteration pour comparer les deux caractères 
  // s'il y' une difference, incrementer le compteur  et enregistrer la difference. 
  // ajouter la difference de longueur avec la méthode Math.abs()
  // retounrer la valeur de count. 

    let count = 0;
    const length = string1.length;
    
    console.log('length:',length)
    for (let i = 0; i < length; i++) {
      if (string1[i] !== string2[i]) {
        count++;
      }
    }
    return count;
  }

  console.log(hammingDistance("I like turtles", "I like turkeys"))
    console.log(hammingDistance("Hello World","Hello World"))
        console.log(hammingDistance("espresso", "Expresso"))