const arr=[1,2,3,3,5]

const squareArray=arr.map(function(element, index){
    return element*element;
});

console.log("Arrays are ", arr, squareArray);

const evenArray=arr.filter(function(element, index){
    return element%2===0;
})

console.log("Even Array ", evenArray);

const arr2=["Van", 2,3,4,5,"something"]

const numberArray=arr2.filter((element)=>{
    return typeof element==="number";
})

console.log(numberArray);


arr.reduce(function(accoumulator, currVal){
    return accoumulator+currVal;
},0);


const arrayOfObject=[
    {
        name: "something",
        assignments: 5,
    },
    {
        name: "something1",
        assignments: 50,
    },
    {
        name: "something2",
        assignments: 15,
    },

]

const myEntry=arrayOfObject.find(function(currentObject){
    return currentObject.name==="something";
})

console.log(myEntry);

const myEntryWithIndex=arrayOfObject.findIndex(function(currentObject){
    return currentObject.name==="something";
})

console.log(myEntryWithIndex);


//for in loop
const obj={
    name:"sth",
    city:"Delhi",
    age:24
}

for(let property in obj){
    console.log(property + " : " + obj[property] );
    console.log();
}


for(let element of arr){
    console.log(element);
}

arr.forEach(function(currentElement){
    console.log(currentElement);
})

const arrObj=[{
    name:"sth",
    city:"Delhi",
    age:24
},

{
    name:"sth1",
    city:"Gurgaon",
    age:36
},
]

for(let element of arrObj){
    for(let property in element){
        console.log(property, element[property]);
    }
}