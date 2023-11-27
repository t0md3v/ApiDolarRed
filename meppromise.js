const getMepAndCad = document.getElementById("dolarMep")
const mepRequest = fetch("https://dolarapi.com/v1/dolares/bolsa").then(response => response.json());
const cadRequest = fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json").then(response => response.json());

Promise.all([mepRequest, cadRequest])
  .then(([data1, data2]) => {
    getMepAndCad.textContent = Math.round(Number(data1.compra)/Number(data2.cad));
    console.log(data1, data2);
  })
  .catch(error => {
    console.error(error);
  })

/*
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
    cad = getCad.value
    mep = getMep.value
    document.getElementById("dolarRed").innerHTML = mep/cad
    console.log(data)
}
dolarRedFunc()
*/