function dolarRedFunc() {
    let getMep = document.getElementById("dolarMep")
    let getCad = document.getElementById("usd-cad")
    let red = document.getElementById("dolarRed")
    let cad
    let mep
    fetch("https://dolarapi.com/v1/dolares/bolsa")
        .then(response => response.json())
        .then(data => {
        getMep.textContent = Number(data.compra);

    });

    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json")
        .then(response => response.json())
        .then(data => {
        getCad.textContent = Number(data.cad)
  });
  //let redTest = getMep.textContent/getCad.textContent
  //console.log(redTest)  

    document.getElementById("dolarRed").innerHTML = mep/cad
    console.log(mep/cad)
}
dolarRedFunc()



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