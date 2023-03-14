// main container
const mainContainer = document.querySelector('.container');

// amount of grids
let amountOfGrids = 400

mainContainer.style.display = "grid";
mainContainer.style.gridTemplate = "30px / repeat(20, 30px)";
mainContainer.style.gridTemplate = "30px / repeat(20, 30px)";


// main container styling
mainContainer.style.backgroundColor = "#666666";
mainContainer.style.gridAutoRows = "30px";

// Create div's
function createGrid(amountDivs) {
for (let i = 0; i < amountDivs; i++) {
    let createDiv = document.createElement('div');
    mainContainer.append(createDiv)
    mainContainer.children[i].classList.add("hello")
}

}

// Creates grid items
createGrid(amountOfGrids);
// 



// Used event  to target children of the grid
mainContainer.addEventListener('mousedown', function (e) {
    if (e.target.matches('.hello')) {
      e.target.classList.toggle('active');
    }
  });


//   reset 

const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('mousedown', function() {

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild)
    }
    createGrid(amountOfGrids);
})





