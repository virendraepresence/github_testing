

const buttonElement = document.getElementById("btn");
let hidden = false;
buttonElement.addEventListener("click", function(){
    // this function get called when the button is clicked
    const paragraph = document.getElementsById("toggle");
    if(hidden){
        paragraph.style.display = "block";
        hidden = false;
    }else{
        paragraph.style.display = "none";
        hidden = true;
    }
});

// function showButtons(){
//     for(let i = 1; i<=10; i++){
//         const buttons = document.createElement("button");
//         buttons.innerText = i;
//         buttons.setAttribute("id", "button" + i);
//         //add this button to the body
//         const bodyElement = document.querySelector("body");
//         bodyElement.appendChild(buttons);
//     }
// }



// try to add some element with js
// create an element

const divElement = document.createElement("div");
// write content in this element
divElement.innerText ="this is inner text in the div";
// the above inner.Text only allows you to write text 

// divElement.innerHTML
//  innerHTML alllows to write a full fledged HTML in an element

const paragraph = document.getElementsById("content");

paragraph.appendChild(divElement)



// function changeBackgroundColourWithID(){
    
//     const paragraph = document.getElementById("para");
//     paragraph.style.color = "white";
//     paragraph.style.backgroundColor = "#    368BC1";
//     paragraph.style.padding = "20px";
//     console.log(paragraph);
// }

// changeBackgroundColourWithID();

// function changeBackgroundColourWithID(){
//     // Document Object Contains Many Predefined Funtions0
//     // It will return the element that has ID "para"
//     const paragraph = document.getElementById("para");
    
//     console.log(paragraph);
// }



// changeBackgroundColourWithID();

// function changeBackgroundColourWithClassName(){
//     const para = document.getElementsByClassName("para");
//     console.log("para name", para);
// }

// changeBackgroundColourWithClassName();

// function changeBackgroundColourWithTagName(){
//     const para = document.getElementsByTagName("p");
//     console.log("para name", para);
// }

// changeBackgroundColourWithTagName();

// function changeBackgroundColourWithQuerySelector(){
//     // QuerySelector only returns the first element that matches the criteria
//     const para = document.querySelector(".ps");
//     console.log("para name", para);
// }

// changeBackgroundColourWithQuerySelector();


// function changeBackgroundColourWithQuerySelectorAll(){
    
//     // QuerySelector returns all the elements that matches the criteria
//     const para = document.querySelectorAll(".ps");
//     console.log("para name", para);
// }

// changeBackgroundColourWithQuerySelectorAll();








































// getName();
// console.log(a);
// var a = 7;
// function getName(){
//     console.log("My name is abcd");
// }

// var getNameDuplicate=()=>{
//     //function body
// }

// getName();
// console.log(getName);
// var getName = function(){
//     console.log("Juno batch");
// }


// console.log("Value of X is", x);
// var x = 7;

// // varible exists in the memory but not have a value
// try{
//     console.log("Value of Y is", y);
// }
// catch(err){
//     console.log("There is an erro", err);
// }


// function sayMyName(name){
//     console.log("my name is ", name);
// }

// sayMyName();

//reference error occurs and stops the execution of the
// program any further when variable is not present
// in the memory