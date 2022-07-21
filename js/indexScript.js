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
