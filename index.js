const container = document.querySelector("#container")
const resetBtn = document.querySelector("#reset")
let qnt = window.prompt('How many?')

resetBtn.addEventListener('click', () => {
    
    qnt = window.prompt('How many?')
    drawGrid()
})
    
drawGrid()
function drawGrid(){

    for(let i = 0; i < qnt;i++){
        let div = document.createElement("div")
        container.appendChild(div)
        div.classList.add('grid-element')
        div.textContent = i
    }
}

let allGrids = document.querySelectorAll('.grid-element')
allGrids.forEach( (x) => {
    x.addEventListener('mouseover', function(e){
        this.style.backgroundColor = "green"
        console.log(e.type)
    })
})
