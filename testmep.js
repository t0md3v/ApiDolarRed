let getMep = document.getElementById("dolarMep")
let getCad = document.getElementById("usd-cad")
let red // = getMep/getCad
red.textContent = getMep/getCad
red = document.getElementById("dolarRed")

fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => {
    getMep.textContent = Number(data.compra);
  })

fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json")
  .then(response => response.json())
  .then(data => {
    getCad.textContent = Number(data.cad)
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