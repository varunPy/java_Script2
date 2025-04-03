function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("hi you called me")
            counter++;
        }else{
            console.log("you already called me ")
        }
    }
}

const myFunc = func();
myFunc();
