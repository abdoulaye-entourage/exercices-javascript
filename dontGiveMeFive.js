function dontGiveMeFive (start, end) {
    let arrayWithoutFive = []; 

    for(let i= start; i<= end; i++) {
        if(i.toString().includes('5') === false) {
            arrayWithoutFive.push(i)
        }
    }   
    return arrayWithoutFive.length
}

console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,5));
console.log(dontGiveMeFive(7,100))
