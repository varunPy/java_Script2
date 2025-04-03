// lexical enviornent, scope chain

const lastName = "verma";
const printName = function(){
    const firstName = "varun";
    console.log(firstName);
    console.log(lastName);

}

printName();

