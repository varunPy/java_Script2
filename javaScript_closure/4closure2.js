function myFunction(power){
    return function(number){
        return number ** power
    }
}

//const myFunction = power => number => number ** power

const square = myFunction(2);
const ans = square(5);
console.log(ans);
