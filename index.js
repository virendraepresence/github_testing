//Print statement in js
console.log("Hello World!!");

//Declare the Variables in JS

var a = 4;
console.log("Value of a is: ", a);

// to check the data type
console.log(typeof a);

const arr = [1,2,3,4,5,6,7];
const arr2 = [1,"hello", "world", 56, true, false];
console.log(arr[0]);
console.log(typeof arr);


// Object is a collection of key value pairs
var obj = {
    name:"Abcd Efgh",
    city:"Delhi",
    address:"Somewhere in Delhi",
    designation:"SDE",
    state:"Delhi",
    age:30,
    hasCompletedGraduation:true
};



console.log(obj["city"]);

var add = function add(a, b){
    const sum = a+b;
    return sum;
}

console.log(add);

var n = 2;
function square(num){
    var ans = num*num;
    return ans;
}

var sq1 = square(n);
var sq2 = square(4);

console.log(sq1);
console.log(sq2);


// var fooNum = Number(foo);
// console.log("FooNum is", fooNum);
// console.log("Typeof", typeof fooNum, typeof foo);

function reverseString(n){
    var reversedString = "";
    for(var i=n.length-1; i>=0; i--){
        var currentCharacter = n.charAt(i);
        reverseString += currentCharacter;

    }

    return reverseString;
}

console.log(reverseString("abc"));


var colour = "red";

function judgeColour(){
    if(colour == "red"){
        console.log("This is a good colour");
    }else{
        console.log("I prefer some other colour");
    }

}

judgeColour();


// function throwError(){
//     throw new Error("This is my customer Error!!");
// }

// throwError();


function twoNumbers(a, b){
    if(typeof a === "number" || typeof a === "number"){
        if(a>b){
            return a-b;
        }else if(b>a){
            return b-a;
        }
    }else{
        throw new Error("one or both are not numbers, 2 numbers are expected!!");
    }
}

console.log(twoNumbers(4,5));

function ternaryDemo(){
    var num = 8;
    num>10?console.log("Number is Greater than 10"):console.log("Number is smaller than 10");
}

function whileDemo(){
    var num = 10;
    while(num>0){
        console.log(num);
        num--;
    }
}
