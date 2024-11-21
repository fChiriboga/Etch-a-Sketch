const container = document.querySelector('#container');

const btn = document.createElement('button');
btn.textContent = "Create new grid";
container.appendChild(btn);
btn.addEventListener("click", function() {
  let newGrid = prompt("How big do you want it to be?");
  createGrid.remove();
  for(let i = 0; i <= newGrid; i++) {
    createGrid();
  }
})
//get grid to populate
const tileContainer = document.createElement('div');
container.appendChild(tileContainer);
tileContainer.classList.add('tileContainer');

const createGrid = () => {
  for(let i = 0; i <= 15; i++) {
    const tileCol = document.createElement('div');
    tileCol.classList.add('tileCol');
    tileContainer.appendChild(tileCol);
  
    tileCol.addEventListener("mouseenter", function() {
      tileCol.style.backgroundColor = "red";
    })
  
    for(let j = 0; j <= 15; j++) {
      const tileRow = document.createElement('div');
      tileRow.classList.add('tileRow');
      tileContainer.appendChild(tileRow);
  
      tileRow.addEventListener("mouseenter", function() {
        tileRow.style.backgroundColor = "red";
      })
    }
  }
};

//check to see if user clicked button and gave input
//remove existing grid and use the number given by the user
//use input to create new grid
//set max limit to 100 x 100
