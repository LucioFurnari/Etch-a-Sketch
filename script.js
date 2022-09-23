const gridContainer = document.querySelector(".grid-container"); //Grid container of the squares.
const colorContainer = document.querySelector(".show-color");//Display the color in the page.
const numberInput = document.querySelector(".number-input");

const inputHueColor = document.querySelector(".input-hue");
const inputSaturation = document.querySelector(".input-saturation");
const inputLightness = document.querySelector(".input-lightness");

let numberOfColumnsAndRows = 16;
// let numberOfRows = 16;
let isDrawing = false;

let hueColor = inputHueColor.value;
let saturationColor = inputSaturation.value;
let lightnessColor = inputLightness.value;
let hslColor =`hsl(${hueColor},${saturationColor}%,${lightnessColor}%)`;
colorContainer.style.backgroundColor =  hslColor;

inputHueColor.addEventListener("input", createHslColor);
inputSaturation.addEventListener("input", createHslColor);
inputLightness.addEventListener("input", createHslColor );

function createHslColor(event){
    
    if(event.target.className === "input-hue"){
        hueColor = event.target.value;
    } else if (event.target.className === "input-saturation"){
        saturationColor = event.target.value;
    } else {
        lightnessColor = event.target.value;
    }
    console.log(hueColor);
    console.log(saturationColor);
    hslColor = `hsl(${hueColor},${saturationColor}%,${lightnessColor}%)`
    colorContainer.style.backgroundColor = hslColor;
}

numberInput.addEventListener("input",(event) => {
    drawSquares(gridContainer,event.target.value);
    gridContainer.style.gridTemplateColumns = `repeat(${event.target.value},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${event.target.value},1fr)`;
});
gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumnsAndRows},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${numberOfColumnsAndRows},1fr)`;

drawSquares(gridContainer,numberOfColumnsAndRows) //Draw the squares in the grid.
function drawSquares(parent,number){ 
    while (parent.hasChildNodes()) {         ////Clean the Grid of squares before create new ones.
        parent.removeChild(parent.firstChild)   
    }
    for(let i=0; i< number*number;i++){ ///Create squares in the grid with a loop.
    let square = document.createElement(`div`);
    square.classList.add("square");
    square.addEventListener("mousemove",(event) => { //Event to paint the squares, if "isDrawing" is true.
        if(isDrawing){
            event.target.style.backgroundColor= hslColor;
        }
    })
    parent.appendChild(square);
    }
}

document.addEventListener("mousedown",(event) => {
    if(event.target.className == "square"){
        isDrawing = true;
    } else {
        isDrawing = false;
    }
})
document.addEventListener("mouseup",() => {
    isDrawing = false;
})

