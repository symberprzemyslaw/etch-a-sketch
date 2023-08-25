const canvas = document.querySelector("#canvas")
const resetBtn = document.querySelector("#reset")
const colorInput = document.querySelector("#color")
const eraser = document.querySelector("#eraser")
let drawingColor;
let qnt;


let getQnt = () => {
    qnt = window.prompt('How many cubes? (100 max)')
    if(qnt > 100){
        qnt = 100
    }
    console.log(qnt)
}

getQnt()
let canDraw = true


document.addEventListener('keydown',e => {
    e.key === 'Shift' ? canDraw = false : null
})
document.addEventListener('keyup',e => {
    e.key === 'Shift' ? canDraw = true : null
})
resetBtn.addEventListener('click', () => {
    canvas.innerHTML = ''
    getQnt()
    drawGrid()
})
eraser.addEventListener('click', () => {
    colorInput.value = '#ffffff'
})
    
drawGrid()
function drawGrid(){

    for(let i = 0; i < (qnt * qnt);i++){
        let div = document.createElement("div")
        canvas.appendChild(div)
        div.classList.add('grid-element')
        div.style.width = `${700 /qnt}px`
    }
    let allGrids = document.querySelectorAll('.grid-element')
    allGrids.forEach( (x) => {
        x.addEventListener('mouseover', function(e){
            canDraw ? this.style.backgroundColor = colorInput.value :  null
        })
    })
}

