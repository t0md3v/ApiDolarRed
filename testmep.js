fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => console.log(data))
  //displayMep(data)

function displayMep(data) {
  const dolarMep = data.compra;
  const dolarMepDiv = document.getElementById("dolarMep");
}

displayMep(data)