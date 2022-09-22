const gridContainer = document.querySelector(".grid-container");
let numberOfColumns = 16;
let numberOfRows = 16;
let isDrawing = false;
gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumns},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${numberOfRows},1fr)`;

for(let i=0; i< numberOfColumns*numberOfRows;i++){
    let square = document.createElement(`div`);
    square.classList.add("square");
    square.addEventListener("mousedown",(event) => {
        isDrawing = true;
        console.log(event.target);
    })
    square.addEventListener("mousemove",(event) => {
        if(isDrawing){
            event.target.style.backgroundColor="black";
        }
    })
    square.addEventListener("mouseup",(event) => {
        isDrawing = false;
    })
    gridContainer.appendChild(square);
}

document.addEventListener("mousedown",(e) => console.log(e.target.className))
function drawSquares(){

}