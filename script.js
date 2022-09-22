const gridContainer = document.querySelector(".grid-container");
let numberOfColumns = 16;
let numberOfRows = 16;
gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumns},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${numberOfRows},1fr)`;

for(let i=0; i< numberOfColumns*numberOfRows;i++){
    let square = document.createElement(`div`);
    square.classList.add("square");
    square.addEventListener("mousedown",(event) => console.log(event))
    square.addEventListener("mouseup",(event) => console.log(event))
    gridContainer.appendChild(square);
}

function drawSquares(){

}