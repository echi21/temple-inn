/*-------------------------------------------------------------------------------------------------------------------*/

// Other formulas and old code to get the info from the DOM.
// Converts the temperature from Celsius to Fahrenheit (°C × 1.8) + 32 = °F
// const CONVERT_FROM_CEL_TO_FAH = (celTemp) => (celTemp * 1.8) + 32;

// Converts the speed from kmp to mph
// const convertFromKmpToMph = (windSpeedKph) => windSpeedKph / 1.609344;


// Getting the elements from the DOM
//const temperature = parseFloat(document.getElementById("temperature").textContent);
//const windSpeedKph = parseFloat(document.getElementById("wind-speed").textContent);
//const windChill = document.getElementById("wind-chill");

// Converts the temperature from celsius to fahrenheit
//(°C × 1.8) + 32 = °F
//const tempFar = (temperature * 1.8) + 32;
// Converts the speed from kmp to mph
//const speedMph = windSpeedKph / 1.609344;

//const windChillFahrenheit = (tempFar, speedMph) =>
//  35.74 + (0.6215 * tempFar) - (35.75 * (speedMph ** 0.16)) + (0.4275 * (tempFar * (speedMph ** 0.16)));

//let windChillCelsius;

//check if wind chill conditions are met
//if (tempFar <= 50 && speedMph > 3.0) {
//  const windChillFah = windChillFahrenheit(tempFar, speedMph);
//  windChillCelsius = ((windChillFah - 32) * 5) / 9; //transform it into celsius [(°F − 32) × 5/9 = 0°C]
//} else {
//  windChillCelsius = "N/A";
//}

//windChill.textContent = windChillCelsius.toFixed(1);
