function createGrid(gridSize){
    const grid = document.createElement('div');
    initializeGrid(grid, gridSize);
    addGridElements(grid, gridSize)
    document.body.appendChild(grid);
}

// set size of grid elements to 25px for now until i figure out how to make it scale
function initializeGrid(grid, gridSize){
    grid.setAttribute('id', 'grid');
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = `repeat(${gridSize}, 25px)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`;
}

// id's are set to row#-col# for selection
function addGridElements(grid, gridSize){
    for(i = 1; i <= gridSize; i++){
        for(j = 1; j <= gridSize; j++){
            const div = document.createElement('div');
            div.setAttribute('id', `row${i}-col${j}`);
            div.style.gridRow = `${i} / ${i+1}`;
            div.style.gridColumn = `${j} / ${j+1}`;
            grid.appendChild(div);
        }
    }
}

createGrid(16);