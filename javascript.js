const container = document.querySelector (".container");
const btn = document.querySelector(".btn")


for (i=0; i<16; i++) {
    const row = document.createElement("div");
    row.className = "row"
    for (j=0;j<16;j++) {
        const cell = document.createElement ("div");
        cell.className = "cell";
        cell.style.width = "60px";
        cell.style.height= "50px";
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "pink";
        })
        row.appendChild(cell);
    }
    container.appendChild(row);
}

function populateGrid(){
    const gridSize = prompt("Grid size?: ");
    if (gridSize<100 || gridSize >2) {
        var validGridSize = gridSize;
    }
    else{
        console.log("invalid input");
  
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (i=0; i< validGridSize; i++) {
        const row = document.createElement("div");
        row.className = "row"
        for (j=0;j<validGridSize;j++) {
            const cell = document.createElement ("div");
            cell.className = "cell"
            let pixeldim = 960/validGridSize
            cell.style.width = pixeldim+ "px";
            cell.style.height = pixeldim + "px";
            cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "pink";
            })
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    
}

btn.addEventListener("click", populateGrid);
