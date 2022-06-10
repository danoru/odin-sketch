const container = document.getElementById("container");

function createGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (c = 0; c < (rows * columns); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

function makeGrid() {
  let gridSize = prompt("What size grid would you like?")
  createGrid(gridSize, gridSize);
}

makeGrid();