const container = document.querySelector('#container');
const btn = document.createElement('button');
for(let i = 0; i <= 15; i++) {
  const tileCol = document.createElement('div');
  tileCol.classList.add('tileCol');
  container.appendChild(tileCol);

  tileCol.addEventListener("mouseenter", function() {
    tileCol.style.backgroundColor = "red";
  })

  for(let j = 0; j <= 15; j++) {
    const tileRow = document.createElement('div');
    tileRow.classList.add('tileRow');
    container.appendChild(tileRow);

    tileRow.addEventListener("mouseenter", function() {
      tileRow.style.backgroundColor = "red";
    })
  }
}
