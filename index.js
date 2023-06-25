const container = document.querySelector("#container")
const resetBtn = document.querySelector("#reset")
const colorInput = document.querySelector("#color")
let qnt = window.prompt('How many?')

resetBtn.addEventListener('click', () => {
    
    qnt = window.prompt('How many?')
    container.innerHTML = ''
    drawGrid()
})
    
drawGrid()
function drawGrid(){

    for(let i = 0; i < (qnt * qnt);i++){
        let div = document.createElement("div")
        container.appendChild(div)
        div.classList.add('grid-element')
        div.style.width = `${900 /qnt}px`
        //div.style.height = `${500 / qnt}px`
        //div.textContent = i + 1
    }
    let allGrids = document.querySelectorAll('.grid-element')
    allGrids.forEach( (x) => {
        x.addEventListener('mouseover', function(e){
            this.style.backgroundColor = colorInput.value
        })
    })
}

