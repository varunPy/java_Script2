// clousers
 
// function can return function

function outerFunction(){
    function innerFunction(){
        console.log("hello world")
    }
    return innerFunction;
}

const ans = outerFunction();
//console.log(ans);
ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans1 = printFullName("varun", "verma");
//console.log(ans1);
ans1();