//Recent colors should be displayed as palette
//Is there any way to download image?

//Dom elements
const container = document.querySelector('.container')
const palette = document.querySelector(".palette")
const popup = document.querySelector(".popup")
const popupInput = document.querySelector(".popup > input")
const popupBtn = document.querySelector(".popup > button")
const canvas = document.querySelector("#canvas")
const resetBtn = document.querySelector("#reset")
const colorInput = document.querySelector("color")
const eraser = document.querySelector("#eraser")

let drawingColor = 'black';
let qnt = 50;
let canDraw = true

// color selection and palette
palette.addEventListener(('click'), (e) => {
    if(e.target.value){
      drawingColor = e.target.value
    }
    console.log('ping')
})

palette.addEventListener(('input'), (e) => {
    if(e.target.value){
      drawingColor = e.target.value
    }
    console.log('ping')
})

// drawing
canvas.addEventListener('mousedown',e => { 
    e.preventDefault()
    canDraw = true
})
canvas.addEventListener('mouseup',e => { 
    e.preventDefault()
    canDraw = false
})
resetBtn.addEventListener('click', () => { // reset button
    canvas.innerHTML = ''
    getQnt()
    drawGrid()
})
eraser.addEventListener('click', () => {
    colorInput.value = '#ffffff'
})

canvas.addEventListener('mouseover', function(e){
        canDraw ? e.target.style.backgroundColor = drawingColor : 'black'
    })


function drawGrid(){ // function that draws grid refering to input value (qnt)
    
    for(let i = 0; i < (qnt * qnt);i++){
        let div = document.createElement("div")
        canvas.appendChild(div)
        div.classList.add('grid-element')
        div.style.width = `${700 /qnt}px`
    }
}
const getQnt = () => { // function that set input to the limit (no hoisting)
    qnt = prompt('How many?')
    if(qnt > 100){
        qnt = 100
    }
    console.log(qnt)
};


getQnt()
drawGrid()