// main container
const mainContainer = document.querySelector('.container');

// amount of grids
mainContainer.style.display = "grid";
mainContainer.style.gridTemplate = "50px / repeat(20, 50px)";


// main container styling
mainContainer.style.backgroundColor = "#666666";
mainContainer.style.gridAutoRows = "50px";

// Create div's
function createGrid(amountDivs) {
for (let i = 0; i <= amountDivs; i++) {
    let createDiv = document.createElement('div');
    mainContainer.append(createDiv)
    mainContainer.children[i].classList.add("hello")
}

}

// Creates grid items
createGrid(399);

// 

// Used event  to target children of the grid
mainContainer.addEventListener('mouseover', function (e) {
    if (e.target.matches('.hello')) {
      e.target.classList.add('active');
    }
  });