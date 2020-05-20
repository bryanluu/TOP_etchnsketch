/* Create the grid */
function createEtchNSketch(ROWS, COLS) {
  let container = document.querySelector("#container");

  let size = container.clientWidth/COLS;
  let passes = 0;
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


      // store pass information
      let pass = document.createAttribute("data-pass");
      pass.value = passes.toString();
      div.setAttributeNode(pass);

      div.addEventListener("mouseover", function(e) {colorIn(this);})
      container.appendChild(div);

    }
  }
}

function colorIn(node) {
  let hue = Math.floor(Math.random()*360); // randomize hue between [0, 360)

  let lightness;
  let passes = Number(node.dataset.pass);
  if (passes <= 10) {
    lightness = 100-10*++passes;
  } else {
    lightness = 0;
  }
  node.dataset.pass = passes.toString();
  let colorText = `hsl(${hue},100%,${lightness}%)`;
  node.style.backgroundColor = colorText;
}

/* Reset logic */

function reset() {
  let container = document.querySelector("#container");
  container.textContent = "";
  let hitNodes = document.querySelectorAll(".hit");
  hitNodes.forEach(node => {
    node.style.backgroundColor = "transparent";
  })
  container.style["border"] = "none";
}

function getDimensions() {
  let rows = prompt("Enter rows:");
  let cols = prompt("Enter columns:");
  reset();
  createEtchNSketch(rows, cols);
}

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", getDimensions);

createEtchNSketch(16, 16);

