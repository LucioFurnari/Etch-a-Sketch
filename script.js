const gridContainer = document.querySelector(".grid-container"); //Grid container of the squares.
const colorContainer = document.querySelector(".show-color");//Display the color in the page.
// const numberInput = document.querySelector(".number-input");
const btnGrid = document.querySelector(".grid-btn");
const btnRainbow = document.querySelector(".rainbow-btn");

const inputHueColor = document.querySelector(".input-hue");
const inputSaturation = document.querySelector(".input-saturation");
const inputLightness = document.querySelector(".input-lightness");

let numberOfColumnsAndRows = 16;
let isDrawing = false;
let isRainbowMode = false;

let hueColor = inputHueColor.value; // Save the hue color.
let saturationColor = inputSaturation.value; // Save the saturation.
let lightnessColor = inputLightness.value; // Save the lightness.
let hslColor =`hsl(${hueColor},${saturationColor}%,${lightnessColor}%)`; // Save the actual color selected

colorContainer.style.backgroundColor =  hslColor; // Show the actual color in the box.

inputHueColor.addEventListener("input", createHslColor);
inputSaturation.addEventListener("input", createHslColor);
inputLightness.addEventListener("input", createHslColor );

btnGrid.addEventListener("click",() => {
    let changeSquares = parseInt(prompt("Ingrese la cantidad de squares (Maximo 100)"));
    if(changeSquares <= 100 && changeSquares >= 2) {
        drawSquares(gridContainer,changeSquares);
        gridContainer.style.gridTemplateColumns = `repeat(${changeSquares},1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${changeSquares},1fr)`;
    } else {
        alert("Ingrese un numero menor a 100");
    }
});

// numberInput.addEventListener("input",(event) => {
//     drawSquares(gridContainer,event.target.value);
//     gridContainer.style.gridTemplateColumns = `repeat(${event.target.value},1fr)`;
//     gridContainer.style.gridTemplateRows = `repeat(${event.target.value},1fr)`;
// });
gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumnsAndRows},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${numberOfColumnsAndRows},1fr)`;

drawSquares(gridContainer,numberOfColumnsAndRows) //Draw the squares in the grid.

btnRainbow.addEventListener("click", () => {
    isRainbowMode = !isRainbowMode 
    console.log(isRainbowMode)
});
document.addEventListener("mousedown",(event) => {
    if(event.target.className == "square"){
        isDrawing = true;
    } else {
        isDrawing = false;
    }
})
document.addEventListener("mouseup",() => {
    isDrawing = false;
    if(!isDrawing){
        hslColor =`hsl(${hueColor},${saturationColor}%,${lightnessColor}%)`;
    }
})


// Functions //
function drawSquares(parent,number){ 
    while (parent.hasChildNodes()) {         ////Clean the Grid of squares before create new ones.
        parent.removeChild(parent.firstChild)   
    }
    for(let i=0; i< number*number;i++){ ///Create squares in the grid with a loop.
    let square = document.createElement(`div`);
    square.classList.add("square");
    square.addEventListener("mouseenter",(event) => { //Event to paint the squares, if "isDrawing" is true.
        if(isDrawing){
            event.target.style.backgroundColor= hslColor;
            createRandomColor()
        }
    })
    parent.appendChild(square);
    }
}
function createHslColor(event){ // Create a new color.
if(!isRainbowMode){
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
}
function createRandomColor() {
    if(isRainbowMode){
    let randomHueColor = Math.floor(Math.random() * 361);
    let randomSaturation = 80;
    let randomLightness = 50;
    hslColor = `hsl(${randomHueColor},${randomSaturation}%,${randomLightness}%)`
    }
}
