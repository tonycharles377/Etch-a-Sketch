function generateCells(size){
    const sketchPad = document.querySelector(".sketchPad");
    const cell = sketchPad.querySelectorAll('div');
    cell.forEach((div) => div.remove());
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (cellIndex = 0; cellIndex < (size * size); cellIndex++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = "blue";
        cell.style.border = "1px solid black";
        sketchPad.appendChild(cell);
    }
}

generateCells(16);

function changeSize(input){
    generateCells(input);
}

changeSize();