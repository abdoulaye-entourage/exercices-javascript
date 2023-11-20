function solution(start, finish) {
  // vérifier si la position de départ et la position de fin sont les mêmes. 
  //Si c'est le cas, pas besoin de faire de sauts et retourner 0.
// Ensuite , vérifier si la valeur à la position de départ est égale à 0. 
// Si c'est le cas,impossible de faire de sauts à partir de cette position et retuner une valeur spéciale, pour indiquer qu'il n'est pas possible d'atteindre la fin.
 // initialiser le nombre minimum de saut  à l'infini
 // trouver le nombre de sauts nécessaires à partir de la nouvelle position
 // Mettre à jour le nombre minimum de sauts nécessaires
 // Retourner -1 si pas possible d'atteindre la fin, sinon retourner le nombre minimum de sauts.


 // definir d'abord la longeur maximale de saut
 // Ensuite calculer la distance totale à parcourir en soustrayant le nombre de départ du nombre d'arrivée. 
 // Diviser le resultat obtenu par la longeur maximale de saut.
 // ensuite arrondir la resultat supérieur en utilisant la methode Math.ceil() 
 let maxJumpSize = 3
 if (finish == 1) {
     return 0; 
 }
 if (start === finish) {
    return 0; 
  }
  if (start === 0) {
    return 0; 
  }
const totaleDistance = finish - start;

return Math.ceil(totaleDistance / maxJumpSize );
 
 }

console.log(solution(1, 5))
console.log(solution(1, 10))
console.log(solution(3, 15))
console.log(solution(5, 27))
console.log(solution(0,6))
console.log(solution(1,1))
console.log(solution(2,4))


// let jumps  = 0; 
// let newJump = 0; 
// let nextJumps = 0;
// for (let start=0; i<finish.length- 1; i++) {
//     nextJumps = Math.max(nextJumps, i + finish[i])
//     if (i= newJump ) {
//         jumps++
//         newJump = nextJumps

//     }

// }
// return jumps


// let result = finish - start

// return Math.floor(result / 3) + (result % 3)



// if (finish.lenght ==1) {
//     return 0; 
// }
// let jumpsCount = 0; 
// let i = 0; 
// if(i+finish[i]< finish.length -1) {
// let maxValue = 0; 
// let indexMaxValue =0; 
// for(let j = 1; j<= finish[i]; j++) {
//     if (finish[j+1] + j > maxValue) {
//         maxValue = finish[j+i] +j; 
//         indexMaxValue = i+j; 
//     }
// }
// i= indexMaxValue;
// jumpsCount++; 
// }
// return jumpsCount +1



/*

function minJumps(start, finish, nums) {
  if (start === finish) {
    return 0; // No jumps needed if start and finish are the same
  }

  if (nums[start] === 0) {
    return Infinity; // Cannot reach the finish if the starting position has a value of 0
  }

  let minJumpsNeeded = Infinity;

  for (let i = start + 1; i <= Math.min(start + nums[start], finish); i++) {
    const jumps = minJumps(i, finish, nums);
    if (jumps !== Infinity) {
      minJumpsNeeded = Math.min(minJumpsNeeded, jumps + 1);
    }
  }

  return minJumpsNeeded;
}

// Example usage:
const start = 0;
const finish = 4;
const nums = [2, 3, 1, 1, 4];
const minJumpsNeeded = minJumps(start, finish, nums);
console.log("Minimum jumps needed:", minJumpsNeeded);

*/



/*

function minJumps(start, finish, nums) {
  if (start === finish) {
    return 0; // Si le début et la fin sont identiques, aucun saut n'est nécessaire
  }

  if (nums[start] === 0) {
    return -1; // Si la position de départ a une valeur de 0, on ne peut pas atteindre la fin
  }

  let jumps = 1; // Nombre de sauts nécessaires
  let maxReach = nums[start]; // Maximum d'index atteignable dans le saut actuel
  let steps = nums[start]; // Nombre de pas restants dans le saut actuel

  for (let i = start + 1; i <= Math.min(start + steps, finish); i++) {
    if (i === finish) {
      return jumps; // Si on atteint la fin, on retourne le nombre de sauts
    }

    maxReach = Math.max(maxReach, i + nums[i]); // Mettre à jour le maximum d'index atteignable

    steps--; // Effectuer un pas

    if (steps === 0) {
      jumps++; // On a besoin d'un saut supplémentaire
      if (i >= maxReach) {
        return -1; // On ne peut pas atteindre la fin
      }
      steps = maxReach - i; // Mettre à jour le nombre de pas restants
    }
  }

  return -1; // On ne peut pas atteindre la fin
}

// Exemple d'utilisation :
const start = 0;
const finish = 7;
const nums = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
const minJumpsNeeded = minJumps(start, finish, nums);
console.log("Nombre minimum de sauts nécessaires :", minJumpsNeeded);

*/