
// city ID for Balcarce = 3436177
// select HTML elements to edit
const CURRENT_TEMP = document.querySelector('#temperature');
const PICTURE_SOURCE = document.querySelector("#temperature-unit source");
const DESC_PARAGRAPH = document.querySelector("#weather-comment");
const WIND_SPEED = document.querySelector("#wind-speed");
const WIND_CHILL = document.querySelector("#wind-chill");
//const WEB_ADDRESS = "https://api.openweathermap.org/data/2.5/weather?id=3436177&appid=daa8fefb9b8b808182b2ade02804a280&units=imperial";
const WEB_ADDRESS = "https://api.openweathermap.org/data/2.5/onecall?lat=-37.846161&lon=-58.255219&exclude=minutely,hourly&appid=daa8fefb9b8b808182b2ade02804a280&units=metric"
let celsiusTemp, weatherIcon, weatherDescription, humidity, windChillOrValue , weatherAlert;
let forecast = [];


async function main(url) {
  try {
    await fetch(url)
      .then(tryingToConvertResponseToJson)
      .then((jsonResult) => {
        console.log(jsonResult);
        calculateAndSetValues(jsonResult);
        renderContent();
      });
  } catch (error) {
    console.log(error);
  }
}

/*-------------------------------------------------------------------------------------------------------------------*/
// The result of parsing push event data as JSON, could be anything that can be represented by JSON — an object,
// an array, a string, a number...
async function tryingToConvertResponseToJson(response) {
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(await response.text());
  }
}

/*-------------------------------------------------------------------------------------------------------------------*/
function capitalize(string) {
  let upperArray = "";
  let stringsArray = string.split(" ");
  stringsArray.forEach(word => {
    upperArray += `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()} `;
  });
  return upperArray;
}

/*-------------------------------------------------------------------------------------------------------------------*/
//check if wind chill conditions are met
function checkIfWindChillCorresponds(value) {
  if (value) {
    return value;
  } else {
    return "N/A";
  }
}

/*-------------------------------------------------------------------------------------------------------------------*/
function calculateAndSetValues(weatherData) {
  weatherIcon = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  celsiusTemp = weatherData.current.temp.toFixed(0);
  humidity = weatherData.current.humidity.toFixed(0);
  weatherDescription = capitalize(weatherData.current.weather[0].description);
  let windchill = weatherData.current.feels_like.toFixed(0);
  windChillOrValue = checkIfWindChillCorresponds(windchill);

  weatherData.daily.forEach((oneDay, index) => {
    if (index > 0) {
      forecast.push(oneDay.temp.day);
    }
  });

  console.log(forecast);
  weatherAlert = weatherData;

}

/*-------------------------------------------------------------------------------------------------------------------*/
function renderContent() {
  PICTURE_SOURCE.setAttribute("srcset", weatherIcon);
  CURRENT_TEMP.innerHTML = `<strong>${celsiusTemp}</strong>`;
  DESC_PARAGRAPH.innerHTML = `<strong>${weatherDescription}</strong>`;
  WIND_SPEED.textContent = humidity;
  //WIND_SPEED.textContent = kphWindSpeed.toFixed(1);
  WIND_CHILL.textContent = windChillOrValue;
}
/*-------------------------------------------------------------------------------------------------------------------*/

main(WEB_ADDRESS);
