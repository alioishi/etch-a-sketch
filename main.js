function createGrid(gridSize){
    const grid = document.createElement('div');
    initGrid(grid, gridSize);
    addGridElements(grid, gridSize)
    document.body.appendChild(grid);
}

// set size of grid elements to 25px for now until i figure out how to make it scale
function initGrid(grid, gridSize){
    grid.setAttribute('id', 'grid');
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = `repeat(${gridSize}, 25px)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`;
}

function addGridElements(grid, gridSize){
    for(row = 1; row <= gridSize; row++){
        for(col = 1; col <= gridSize; col++){
            const gridElement = document.createElement('div');
            initGridElement(gridElement, row, col);
            grid.appendChild(gridElement);
        }
    }
}

// id's are set to row#-col# for selection
function initGridElement(gridElement, row, col){
    gridElement.setAttribute('id', `row${row}-col${col}`);
    gridElement.style.gridRow = `${row} / ${row+1}`;
    gridElement.style.gridColumn = `${col} / ${col+1}`;
}

createGrid(16);