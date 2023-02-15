//Making the grid cells

function addGridCells(gridSize) {
    let numCells = gridSize * gridSize;
    const canvas = document.querySelector(".canvas");

    for (let i = 0; i < numCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add(`cell`); //cell${i + 1}
        canvas.appendChild(cell);
    }
}

addGridCells(16);