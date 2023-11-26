fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(function (data) {
    console.log(data);
    displayMep(data);
  });

function displayMep(data) {
  const dolarMep = data.venta;
  const dolarMepDiv = document.getElementById("dolarMep");
}

const mep = dolarMep;
const heading = document.createElement("h1");
heading.innerHTML = mep;
dolarMepDiv.appendChild(heading);
