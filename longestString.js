function longest (s1,s2) {
    let newString = s1.concat(s2)
    console.log('newString:', newString)
    let longestString = unique(newString).split("").sort();
    console.log('longestString:', longestString)
       return longestString.join('')
}



function unique (longestString) {
  let uniqueValue = "";
  for(let i=0; i< longestString.length; i++) {
      if(!uniqueValue.includes(longestString[i]) ) {
        uniqueValue += longestString[i];
      }
  }
  return uniqueValue
 }

 // let a = true
// !a === false

   



console.log(longest("aretheyhere", "yestheyarehere"));



// // fusionner s1 et s2
//   //  faire un split et un join sur le resultat obtenu
//   //
//   let newString = s1.concat(s2)
//   // console.log(newString)
//   let longestString = unique(newString).split("").sort();
//   console.log(longestString)
//   // return longestString.join("");
// }
// // function unique (string) {
// // let result = ""
// // for(let i=0; i<string.length; i++) {
// //     if(result.indexOf(string[i]) == -1) {
// //         result +=string[i]
// //     }
// //     return result
// // }
// // }