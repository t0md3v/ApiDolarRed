let getMep = document.getElementById("dolarMep")

fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => {
    getMep.textContent = Number(data.compra);
  })

/*
function displayMep(data) {
  const dolarMep = data.venta;
  const dolarMepDiv = document.getElementById("dolarMep");
}

const mep = dolarMep;
const heading = document.createElement("h1");
heading.innerHTML = mep;
//dolarMepDiv.appendChild(heading);
*/