const dMep = "https://dolarapi.com/v1/dolares/bolsa";
const dOficial = "https://dolarapi.com/v1/dolares/oficial";
const dBlue = "https://dolarapi.com/v1/dolares/blue";
// const dTarjeta = "https://dolarapi.com/v1/dolares/solidario";
const getMepAndCad = document.getElementById("dolarMep")
const mepRequest = fetch("https://dolarapi.com/v1/dolares/bolsa").then(response => response.json());
const cadRequest = fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json");
const cadRequestNew = fetch("https://openexchangerates.org/api/latest.json?app_id=00329c842053463da79ec8b116add234");
then(response => response.json());

const options = { method: "GET", headers: { Accept: "application/json" } };

const actualizacion = document.getElementById("fechaHora");
const cotizacionesContainer = document.getElementById("cotizacionesContainer");

Promise.all([mepRequest, cadRequestNew])
  .then(([data1, data2]) => {
    getMepAndCad.textContent = '$' + Math.round(Number(data1.compra)/Number(data2.cad));
    console.log(data1, data2);
  })
  .catch(error => {
    console.error(error);
})

async function getDolar(url) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    const fechaHoraISO = new Date(data.fechaActualizacion);
    const fecha = fechaHoraISO.toLocaleDateString();
    const hora = fechaHoraISO.toLocaleTimeString();
    actualizacion.textContent = `${fecha} - ${hora} `;

    data.compra = data.compra !== null ? data.compra : "---";

    const cotizacion = {
      nombre: data.nombre,
      compra: data.compra,
      venta: data.venta,
    };
    crearTarjetas(cotizacion);
  } catch (error) {
    console.error(error);
  }
}
getDolar(dMep);
getDolar(dOficial);
getDolar(dBlue);
// getDolar(dTarjeta);

// Receive the quote type and generate the card
//Recibe la cotizacion del tipo de dolar y genera la tarjeta

function crearTarjetas(cotizacion) {
  // Create an element div for the card
  // Creo un elemento div para la tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("card");

  // Creo la estructura HTML de la tarjeta usando una plantilla
  tarjeta.innerHTML = `
      <div class="card">
          <p class="cardTitulo">${cotizacion.nombre}</p>
          <hr>
          <div class="cardCotizaciones">
              <div class="cardCompraVenta">
                <p class="cardSubtitulo">Compra</p>
                <p class="precio">$ ${cotizacion.compra}</p>
              </div> 
              <div class="cardCompraVenta">
                <p class="cardSubtitulo">Venta</p>
                <p class="precio">$ ${cotizacion.venta}</p>
              </div>
          </div>
    </div>`;

  // Agrego la tarjeta al contenedor
  cotizacionesContainer.appendChild(tarjeta);
}
// document.getElementById("dRed").innerHTML = data.getDolar(dMep)


fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => document.getElementById("dolarMep"))
  //displayMep(data)

function displayMep(data) {
  const dolarMep = data.compra;
  const dolarMepDiv = document.getElementById("dolarMep");
}