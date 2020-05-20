/* Create the grid */
function createEtchNSketch(ROWS, COLS) {
  let container = document.querySelector("#container");

  let size = container.clientWidth/COLS;

  container.style.width = size*ROWS;
  container.style.height = size*COLS;
  container.style["grid-template-rows"] = ROWS;
  container.style["grid-template-columns"] = COLS;
  container.style["border"] = "5px ridge gray";

  for (let row = 0; row < ROWS; row++)
  {
    for(let col = 0; col < COLS; col++)
    {
      const div = document.createElement("div");
      div.style.width = size + "px";
      div.style.height = size + "px"
      div.style["grid-row"] = row+1;
      div.style["grid-column"] = col+1;
      div.addEventListener("mouseover", function(e) {colorIn(this);})
      container.appendChild(div);
    }
  }
}

function colorIn(node) {
  node.classList.add("hit");
}

/* Reset logic */
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", getDimensions);

createEtchNSketch(16, 16);

function reset() {
  let container = document.querySelector("#container");
  container.textContent = "";
  let hitNodes = document.querySelectorAll(".hit");
  hitNodes.forEach(node => {
    node.classList.remove("hit");
  })
  container.style["border"] = "none";
}

function getDimensions() {
  let rows = prompt("Enter rows:");
  let cols = prompt("Enter columns:");
  reset();
  createEtchNSketch(rows, cols);
}
