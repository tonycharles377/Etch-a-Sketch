const container = document.querySelector('#container');

//create 16 x 16 grid
function createGrid(rows, colums){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-colums', colums);
    for (cells = 0; cells < (rows * colums); cells++){ 
        let cell = document.createElement('div');
        cell.classList.add('cells');
        // cell.innerText = (cells + 1);
        container.appendChild(cell);
    }
}

createGrid(16, 16);
