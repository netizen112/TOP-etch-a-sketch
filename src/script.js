//Global variables
const canvas = document.querySelector(".canvas");

//Handles color change when mouse goes over a grid cell
function colorChange(e){
    e.target.style.backgroundColor = "lightblue";
}

//Adds gridSize * gridSize number of cells (divs) to the canvas div
function addGridCells(gridSize) {
    let numCells = gridSize * gridSize;

    for (let i = 0; i < numCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add(`cell`); //cell${i + 1}
        canvas.appendChild(cell);

        cell.addEventListener('mouseover', colorChange);
    }
}

let inputGridSize = 0;

function getInput(){
    inputGridSize = prompt("Enter Grid Size (max 100)");
    if (inputGridSize > 0 && inputGridSize <= 100){
        canvas.replaceChildren();
        addGridCells(inputGridSize);

        canvas.style = `
        display: grid;
        height: 500px;
        width: 500px;
        border: 2px solid red;
        grid-template-columns: repeat(${inputGridSize}, 1fr);
        grid-template-rows: repeat(${inputGridSize}, 1fr);
        `
    } else {
        alert("Invalid Grid Size");
    }
}

addGridCells(16);