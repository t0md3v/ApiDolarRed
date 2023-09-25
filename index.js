const dOficial = "https://dolarapi.com/v1/dolares/oficial";
const dBlue = "https://dolarapi.com/v1/dolares/blue";
const dTarjeta = "https://dolarapi.com/v1/dolares/solidario";
const dMep = "https://dolarapi.com/v1/dolares/bolsa";

const options = { method: "GET", headers: { Accept: "application/json" } };

async function getDolar(url) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getDolar(dOficial);
getDolar(dBlue);
getDolar(dTarjeta);
getDolar(dMep);
