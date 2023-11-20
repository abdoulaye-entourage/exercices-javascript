function solve(s) {
    let upper =0;
    let lower = 0;
    let number =0; 
    let special = 0; 
    for(let i= 0; i<s.length; i++) {
        if(s.charCodeAt([i]) >= 65 && s.charCodeAt([i]) <=90) { 
           upper++          
        }else if (s.charCodeAt([i]) >= 97 && s.charCodeAt([i]) <= 122) {
            // console.log(s.charCodeAt([i]))
           lower++
        }else if(s[i] >= 0 && s[i] <= 9) {
            number++
        }else{
         special++
        }
        
    }
    return [upper, lower, number, special]
  
}
 
console.log(solve(""));
console.log(solve("aAbBcC"));
console.log(solve("aAbBcC"));
console.log(solve("Codewars@codewars123.com"));
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"))


// charCode pour minuscule : 65-91
// charCode pour majuscules : 97 to 123


// let upperC = 0; 
// let lowerC = 0;

// function isUpperCase(s) {
//     let charCode = s.charCodeAt(0)
//     let isUpper = charCode >= 97 && charCode <= 123
//     return isUpper ? true : false
// }
// function isLowerCase(s) {
//     let charCode = s.charCodeAt(0)
//     let isLower = charCode >= 97 && charCode <= 123
//     return isLower ? true : false
// }
// for(let i=0; i<= s.length; i++) {
//     if(is)
// }
