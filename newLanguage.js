//Callback Function : A function that executes once some  
function createWalls(){
    for(let i = 0; i<=9; i++){
        const wall = document.createElement("div");
        wall.style.height = "100px";
        wall.style.width = "100px";
        wall.style.display = "inline-block";
        wall.style.border = "1px solid black";
        wall.className = "wall";
        const wallCollection = document.getElementsById("walls");
        wallCollection.appendChild(wall);
    }
}

function clearAllWalls(){
    const allWalls = document.getElementsByClassName("wall");
    for(let i = 0; i<allWalls.length; i++){
        allWalls[i].style.background="transparent";
    }
}

const applyButton = document.getElementById("apply");
applyButton.addEventListener("click", function(){
    clearAllWalls();
    
    const colorInput = document.getElementById("wall_color");
    const color = colorInput.value;
    const idInput = document.getElementById("wall_id");
    const idValue = idInput.value;
    const wallWithId = document.getElementById(idValue);
    wallWithId.style.background = color;
})

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
    clearAllWalls();
})


createWalls();


// const buttonElement = document.getElementById("btn");
// let buttonCount = 1;
// buttonElement.addEventListener("click", function(){
//     // this function get called when the button is clicked
//     const buttons = document.createElement("button");
//     buttons.innerText = "Button" + buttonCount;
//     buttons.setAttribute("id", "button" + buttonCount++);
//     //add this button to the body
//     const bodyElement = document.querySelector("body");
//     bodyElement.appendChild(buttons);
    
// });





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

// showButtons();




