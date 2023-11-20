function high(x){
    // 1 : diviser la chaine de caractere en un tableau en utilisant la methode split('') et stocker dans une variable 
    // 2 : initialiser les variables highestScore à 0 et heighestWord en une chaine vide pour le mot ayant le score le plus elevé.
    // 3 : Utiliser la boucle for pour parcourir chaque mot du tableau
    // 4 : initialiser le score à 0 pour chaque mot
    // 5 : utiliser la boucle for pour parcourir chaque caractère du mot. 
    // dans cette boucle, calculer le score en ajoutant la valeur Unicode du caractere(charCodeAt(I)) moins 96 a la variable 'score'
    // 6 : Comparer 'score actuel avec  highestCore : si 'score' est superieur à 'highestScore'
    // mettre à jour 'highestScore' avec la variable 'score' et definir highestWord sur le mot actuel. 
    // renvoyer 'highestWord' comme étant le mot ayant le score le plus élévé.
     const wordList = x.split(' ');
    console.log(wordList)

    let heighestScore = 0;
    let heighestWord = ''; 
    // for(let i=0; i< wordList.length; i++) {
    //     const word =  wordList[i]; 
    //     let score = 0; 

    //     for(let j=0; j<word.length; j++) {
    //         const letter = word[j].toLowerCase(); 
    //         score += letter.charCodeAt(0) - 96;
    //     }
    for (let word of wordList) {
        let score = 0;
    
        for (let i = 0; i < word.length; i++) {
          score += word.charCodeAt(i) - 96;
        }

        if(score > heighestScore) {
            heighestScore = score;
            heighestWord = word; 
        }
    }
    return heighestWord;
    }



console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano')); 
console.log(high('take me to semynak'));   
console.log(high('aa b')); 
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));