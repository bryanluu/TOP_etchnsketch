let container = document.querySelector("#container");

const ROWS = 16, COLS = 16;
const size = 10;

container.style["grid-template-rows"] = ROWS;
container.style["grid-template-columns"] = COLS;

for (let row = 0; row < ROWS; row++)
{
  for(let col = 0; col < COLS; col++)
  {
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px"
    div.style.backgroundColor = "cyan";
    div.style.border = "1px solid black";
    div.style["grid-row"] = row+1;
    div.style["grid-column"] = col+1;
    container.appendChild(div);
  }
}
