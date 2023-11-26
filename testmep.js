fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => document.getElementById("dolarMep"))
  //displayMep(data)

function displayMep(data) {
  const dolarMep = data.compra;
  const dolarMepDiv = document.getElementById("dolarMep");
}