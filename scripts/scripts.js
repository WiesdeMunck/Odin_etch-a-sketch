// main container
const mainContainer = document.getElementById('container');

// amount of grids
mainContainer.style.display = "grid";
mainContainer.style.gridTemplate = "50px / repeat(20, 50px)";


// main container styling
mainContainer.style.backgroundColor = "#666666";
mainContainer.style.width = "500px";
mainContainer.style.gridAutoRows = "50px";
// mainContainer.style.height = "500px";


// Create div's
function createGrid(amountDivs) {
for (let i = 0; i <= amountDivs; i++) {
    let createDiv = document.createElement('div');
    mainContainer.append(createDiv)

    mainContainer.children[i].style.backgroundColor = "#00ff00"
    
}

}

createGrid(399);

let child = mainContainer.firstElementChild;

child.style.backgroundColor = "#0000ff"












