console.log("This is tut51");

// function greet(name0){
//     console.log(name0 + " is a good boy");
// }

function greet(name0, greetText = "Greetings from javascript"){
    let name1 = "Name1";   //This is a local sccpe inside function will not affect name1=sagar
    console.log(greetText + " " + name0);
    console.log(name0 + " is a good boy");
}


function sum(a,b,c){
    let d= a+b+c;
    return d;
    // This line will never execute
    // console.log("jharkhand")
}
//Global variable
let name0 = "supriyo";
let name1 = "sagar";
let name2 = "supu";
let name3 = "samar";
let greetText = "A very Good morning"
// let greetText1 = "A very Good morning"

// greet(name0);
// greet(name1);
// greet(name2);
// greet(name3);

greet(name0, greetText);
greet(name1, greetText);
greet(name2, greetText);
// greet(name0, greetText1);
// greet(name1, greetText1);
// greet(name2, greetText1);


// let returnVal = greet(name3);
// console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);

// console.log(name0 + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
