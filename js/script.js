/*********************************************************************************************************************/
//If this block of code is in any other place inside this file, it does not work. It needs to be at the beginning.

// get all the img with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -30% 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// first checks to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  // loops through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else { // just load all images if not supported...
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

/*********************************************************************************************************************/
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// creates a Date object and gets the current year.
const currentDate = new Date();
const dayName = dayNames[currentDate.getDay()];
const monthName = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();
const numberDay = currentDate.getDate();

document.getElementById("current-date").textContent = `${dayName}, ${numberDay} ${monthName}, ${year}`;

/*********************************************************************************************************************/

// Displays a banner on Mondays or Tuesdays only at the very top of the page
let banner = document.querySelector("#weather-alert");
if (dayName.toLowerCase() === "monday" || dayName.toLowerCase() === "wednesday" || dayName.toLowerCase() === "friday") {
  banner.style.display = "block";
}

document.getElementById("close-weather-alert-button").onclick = () => {
  document.getElementById("weather-alert").style.display = "none";
}

/*-------------------------------------------------------------------------------------------------------------------*/
// select HTML elements to edit
const CURRENT_TEMP = document.querySelector('#temperature');
const PICTURE_SOURCE = document.querySelector("#temperature-unit source");
const DESC_PARAGRAPH = document.querySelector("#weather-comment");
const WIND_SPEED = document.querySelector("#wind-speed");
const WIND_CHILL = document.querySelector("#wind-chill");
const WEB_ADDRESS = "https://api.openweathermap.org/data/2.5/onecall?lat=-37.846161&lon=-58.255219&exclude=minutely,hourly&appid=daa8fefb9b8b808182b2ade02804a280&units=metric"
let celsiusTemp, weatherIcon, weatherDescription, humidity, windChillOrValue , weatherAlert;
let forecastTemp = [];


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
      forecastTemp.push(oneDay.temp.day);
    }
  });

  console.log(forecastTemp);
  weatherAlert = weatherData;

}
/*-------------------------------------------------------------------------------------------------------------------*/
function prepareForecast() {
  let uLElement = document.querySelector("#weather-forecast");
  forecastTemp.forEach(temp => {
  let liElement = document.createElement("div");
  liElement.textContent = `${temp.toFixed(0)} °C`;
  uLElement.appendChild(liElement);
  });
}

/*-------------------------------------------------------------------------------------------------------------------*/
function renderContent() {
  PICTURE_SOURCE.setAttribute("srcset", weatherIcon);
  CURRENT_TEMP.innerHTML = `<strong>${celsiusTemp}</strong>`;
  DESC_PARAGRAPH.innerHTML = `<strong>${weatherDescription}</strong>`;
  WIND_SPEED.textContent = humidity;
  WIND_CHILL.textContent = windChillOrValue;
  prepareForecast();
}
/*-------------------------------------------------------------------------------------------------------------------*/

main(WEB_ADDRESS);

/*-------------------------------------------------------------------------------------------------------------------*/

//Toggle the menu when the web page is in small size
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;

/*-------------------------------------------------------------------------------------------------------------------*/

// gets the first span tag and sets the year.
document.querySelector("#year").textContent = year.toString();

// gets the second span tag and stored it.
let lastUpdate = document.querySelector("#updated-date");
// gets and stores a string containing the date and time on which the current document was last modified.
let lastChangeDate = document.lastModified;
// puts the previous information in the second span.
lastUpdate.textContent = `Last Modification: ${lastChangeDate}`;
/*-------------------------------------------------------------------------------------------------------------------*/
