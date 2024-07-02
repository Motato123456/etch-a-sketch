let input = prompt("Give a grid number:")



const container = document.querySelector (".container");
for (i=0; i<16; i++) {
    const row = document.createElement("div");
    row.className = "row"
    for (j=0;j<16;j++) {
        const cell = document.createElement ("div");
        cell.className = "cell"
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "pink";
        })
        row.appendChild(cell);
    }
    container.appendChild(row);
}



