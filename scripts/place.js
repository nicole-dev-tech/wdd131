// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static Cape Town weather values
const temperature = 18; // °C (typical mild weather)
const windSpeed = 20;   // km/h (Cape Town is often windy)

// Wind Chill Formula (Metric)
function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Display Wind Chill
const windChillEl = document.getElementById("windChill");

// Apply correct condition logic
if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillEl.textContent = "N/A";
}