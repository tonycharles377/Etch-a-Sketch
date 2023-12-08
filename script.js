let color = 'black';
let click = true;

function generateCells(size){
    const sketchPad = document.querySelector(".sketchPad");
    const cell = sketchPad.querySelectorAll('div');
    cell.forEach((div) => div.remove());
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (cellIndex = 0; cellIndex < (size * size); cellIndex++){
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', colorCell);
        cell.classList.add('cell');
        cell.style.backgroundColor = "white";
        sketchPad.appendChild(cell);
    }
}

generateCells(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
        generateCells(input);
    }else{
        console.log('Enter numbers from 2 to 100');
    }
    
}

changeSize();

function colorCell(){
    if (click){
        if(color === 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(){
    const black = document.querySelector('.black');
    const rainbow = document.querySelector('.rainbow');
    const erase = document.querySelector('.erase');
    const clear = document.querySelector('.clear');

    black.addEventListener('click', () => {
        color = 'black';
    });

    rainbow.addEventListener('click', () => {
        color = 'rainbow';
    });

    erase.addEventListener('click', () => {
        color = 'white';
    });

    clear.addEventListener('click', () => {
        const sketchPad = document.querySelector(".sketchPad");
        const cell = sketchPad.querySelectorAll('div');
        cell.forEach((div) => div.style.backgroundColor = 'white');
    });
}

changeColor();

document.querySelector('.sketchPad').addEventListener('click', () => {
    click = !click;
    if(click){
        document.querySelector('.mode').textContent = "Mode: Colring!, click on the sketchpad to stop coloring";
    }else{
        document.querySelector('.mode').textContent = "Mode: Not Colring!, click on the sketchpad to start coloring";
    }
})

document.addEventListener('DOMContentLoaded',function(){
    alert('Developement in progress!');
})