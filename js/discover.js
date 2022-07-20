
// initialize display elements
const numVisitsID = document.getElementById("numb-visits-id");
const timeBetweenId = document.getElementById("time-between-id");

const calculateNumberOfVisits = () => {
  // gets the value associated with that key and parse it into a number.
  let value = Number(window.localStorage.getItem("discoverVisitsLs"));
  value++;
  // sets the new value in the same key stored in localStorage.
  window.localStorage.setItem("discoverVisitsLs",value.toString());
  // sets the value in the span element.
  numVisitsID.textContent = value.toString();
}

// if the item discoverVisits exists in the localStorage...
if (window.localStorage.getItem("discoverVisitsLs")) {
  // calls the previous arrow function.
  calculateNumberOfVisits();
} else {
  // if it doesn't exist, it creates it with an initial value of 1. Then sets a message in the span element
  window.localStorage.setItem("discoverVisitsLs", "1");
  numVisitsID.textContent = `This is your first visit!`;
}
/*********************************************************************************************************************/

// one day is equal to 86400000 milliseconds
const currentDateMilli = Date.now();

const calculateLastVisitDay = () => {
  // gets the value associated with that key and parse it into a number.
  const storedDateMilli = Number(window.localStorage.getItem("timeStampLs"));
  const daysSinceVisits = Math.round((currentDateMilli - storedDateMilli) / 86400000);
  timeBetweenId.textContent = daysSinceVisits.toString();
  window.localStorage.setItem("timeStampLs",currentDateMilli.toString());
}

// if the item timeStampLs exists in the localStorage...
if (window.localStorage.getItem("timeStampLs")) {
  // calls the previous arrow function.
  calculateLastVisitDay();
} else {
  // if it doesn't exist, it creates it with a default value. Then sets a message in the span element.
  window.localStorage.setItem("timeStampLs", currentDateMilli.toString());
  timeBetweenId.textContent = "0";
}
