fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => displayMep(data.compra))

function displayMep() {
  const dolarMep = data.compra;
  const dolarMepDiv = document.getElementById("dolarMep");
}
