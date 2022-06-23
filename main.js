function createGrid(gridSize){
    const etchASketch = document.querySelector('#etch-a-sketch');

    const grid = document.createElement('div');
    initGrid(grid, gridSize);
    addGridElements(grid, gridSize)
    
    etchASketch.appendChild(grid);
}

// set size of grid elements to 25px for now until i figure out how to make it scale
function initGrid(grid, gridSize){
    let sideLength = 800;

    grid.setAttribute('id', 'grid');
    grid.style.display = 'grid';
    grid.style.height = `${sideLength}px`;
    grid.style.width = `${sideLength}px`;
    grid.style.border= '24px solid red';
    grid.style.borderRadius= '48px';
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${sideLength/gridSize}px)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${sideLength/gridSize}px)`;
}

function addGridElements(grid, gridSize){
    for(row = 1; row <= gridSize; row++){
        for(col = 1; col <= gridSize; col++){
            const gridElement = document.createElement('div');
            initGridElement(gridElement, row, col);
            addHoverToGridElement(gridElement, row, col);
            grid.appendChild(gridElement);
        }
    }
}

function deleteGrid(){
    const etchASketch = document.querySelector('#etch-a-sketch');

    const grid = document.querySelector('#grid');
    
    etchASketch.removeChild(grid);
}

// id's are set to row#-col# for selection
function initGridElement(gridElement, row, col){
    gridElement.setAttribute('id', `row${row}-col${col}`);
    gridElement.style.gridRow = `${row} / ${row+1}`;
    gridElement.style.gridColumn = `${col} / ${col+1}`;
}

function addHoverToGridElement(gridElement){
    gridElement.addEventListener('mouseover', () => {
        if(gridElement.style.backgroundColor == 'transparent'){
            gridElement.style.opacity = '0.0';
        }
        gridElement.style.opacity = `${(+(gridElement.style.opacity) + 0.1)}`;
        gridElement.style.backgroundColor = 'black';
    });
}

function initNewGridButton(){
    const newGridButton = document.querySelector('#new-grid-button');
    newGridButton.addEventListener('click', () => {
        let gridSize = getUserGridSize();
        deleteGrid();
        createGrid(gridSize);
    });
}

function getUserGridSize(){
    let gridSize;

    do{
        gridSize = prompt("Please enter a grid size between 1 and 100");
    }while((gridSize < 1 || gridSize > 100) && (gridSize != null))

    return (gridSize == null) ? 16 : gridSize;
}

createGrid(16); // create default grid of 16x16
initNewGridButton();