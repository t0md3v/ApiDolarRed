const cotizaciones = [];

const dOficial = "https://dolarapi.com/v1/dolares/oficial";
const dBlue = "https://dolarapi.com/v1/dolares/blue";
const dTarjeta = "https://dolarapi.com/v1/dolares/solidario";
const dMep = "https://dolarapi.com/v1/dolares/bolsa";
const options = { method: "GET", headers: { Accept: "application/json" } };

const actualizacion = document.getElementById("fechaHora");

async function getDolar(url) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    const fechaHoraISO = new Date(data.fechaActualizacion);
    const fecha = fechaHoraISO.toLocaleDateString();
    const hora = fechaHoraISO.toLocaleTimeString();
    actualizacion.textContent = `${fecha} / ${hora} `;

    data.compra = data.compra !== null ? data.compra : "-----";

    const cotizacion = {
      nombre: data.nombre,
      compra: data.compra,
      venta: data.venta,
    };

    cotizaciones.push(cotizacion);
  } catch (error) {
    console.error(error);
  }
}
getDolar(dOficial);
getDolar(dBlue);

getDolar(dTarjeta);
getDolar(dMep);
console.log(cotizaciones);

const cotizacionesContainer = document.getElementById("cotizacionesContainer");

crearTarjetas(cotizaciones);

// recibe el array de objetos y crea las tarjetas

function crearTarjetas(cotizaciones) {
  cotizaciones.forEach((cotizacion) => {
    // Crea un elemento div para la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    // Crea la estructura HTML de la tarjeta usando una plantilla
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

    // Agrega la tarjeta al contenedor
    cotizacionesContainer.appendChild(tarjeta);
  });
}
