function validatePIN (pin) {
let regex = "/^(\d{4}|\d{6})$/"
if(/^(\d{4}|\d{6})$/.test(pin)) {
    return true
}else {
    return false
}
// if(/^(\d{4}|\d{6})$/.test(pin))  {
//     return true
// }else {
//     return false
// }


}

console.log(validatePIN("1"))  
console.log(validatePIN("1234"))      
console.log(validatePIN("12"))
console.log(validatePIN("123"))
console.log(validatePIN("12345"))
console.log(validatePIN("1234567"))
console.log(validatePIN("-1234"))
console.log(validatePIN("1.234"))
console.log(validatePIN("-1.234"))
console.log(validatePIN("00000000"))
