/*function maskify(cc) {
  // :en entrée: une chaine de caractère
  //  remplacer tous les caractères par # =>  faire une boucle for sur chaque caractère
  // ajouter une condition dans la boucle : remplacer seulement les caractères à l'indice length - 4
  // en sortie : la chaine de caractère avec chaque caractère remplacé par # sauf les 4 derniers
  let result = "";
  // cc: 455636
  for (let i = 0; i < cc.length; i++) {
    // cc[i]: "c", i: 2, cc:abcdef, length: 6
    if (i < cc.length - 4) {
      result += "#";
    } else {
      result += cc[i];
    }

    console.log(result);
    // result: #
  }
  //   result: ##cdef
  console.log(result);
}
maskify("abcdef");


*/

/***
 * 


function getMiddle(s) {
  //  En ent une chaine de caractère
  // Prendre l'indice de chaque caractèe comme référence
  // faire une condition pour savoir si la longueur de la chaine est pair ou impair
  // Si c'est pair on retourne les deux caractère au milieu (on definit si le modulo de la longueur de la chaine est === 0 ) sinon un seul caractère au milieu(si le modulo es different de 0)
  let i = Math.floor(s.length / 2);

  let result = s[i];

  if (s.length % 2 === 0 && i > 0) {
    result = s[i - 1] + result;
  }
  return result;
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));


 */
/*
function spinWords(string) {
  return string
    .split(" ")
    .map(function (string) {
      return string.length > 4 ? string.split("").reverse().join("") : string;
    })
    .join(" ");
  return string;
}

spinWords("Welcome");
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
spinWords("You are almost to the last test");
spinWords("Just kidding there is still one more");
spinWords("Seriously this is the last one");
*/

function spinWords(string) {
  // transformer d'abord la chaine de caractère en tableau en séparant chaque mot
  //ensuite faire une boucle sur le tableau qui va itérer sur chaque mot.
  // faire une condition dans la boucle pour separer chaque mot superieur  ou egal 5
  // ensuite les renverser et les joindre
  // joindre les mots

  // separer d'abord les mots ensuite faire une condition pour separer que les mot qui on plus de 5 caractères
  // separer les lettres du string et revoyer un tableau de la separation
  // faire une boucle sur le tableau
  // dans le boucle faire une condition : si la longeur du string separé est superieur ou égale à 1, renverser le mot sinon afficher le mot.

  let separatedString = string.split(" ");

  let result = "";
  for (let i = 0; i < separatedString.length; i++) {
    if (result) result += " ";
    if (separatedString[i].length >= 5) {
      result += separatedString[i].split("").reverse().join("");
      //result = separatedString[i].split("").reverse().join("");
    } else {
      result += separatedString[i];
    }
  }
  console.log(result);
}

console.log();
spinWords("Welcome");
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
spinWords("You are almost to the last test");
spinWords("Just kidding there is still one more");
spinWords("Seriously this is the last one");
