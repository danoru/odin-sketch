let color = "black";

function makeGrid(size) {
  let sketchpad = document.querySelector(".sketchpad");
  let squares = sketchpad.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for(let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor= "white";
    sketchpad.insertAdjacentElement("beforeend", square);
  };
};

makeGrid(16);

function gridSize(input) {
  if(input >= 2 && input <= 100) {
    makeGrid(input);
  } else {
    console.log("Too many squares.")
  };
};

function colorSquare() {
  if(color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
};

function changeColor(choice) {
  color = choice;
};

function resetGrid() {
  let sketchpad = document.querySelector(".sketchpad");
  let squares = sketchpad.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = "white");
}