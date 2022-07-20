
const COMPANIES_URL = "json/data.json";
const SPOTS_BOX = document.querySelector("#spots-box");
let companiesArray = [];
let indexesArray = [];
let twoCompanies = [];
/*
* The result of parsing push event data as JSON, could be anything that can be represented
* by JSON — an object, an array, a string, a number...
*/
function tryingToConvertResponseToJson(response) {
  if (response.ok) {
    let jsonResult = response.json();
    console.log(jsonResult);
    return jsonResult;
  } else {
    console.log("Oh no! Something went WRONG:", response);
  }
}

function getRandomIntNumberFromZeroToLessThan(number) {
  return Math.floor(Math.random() * number);
}

function setTwoDifferentIndexNumbersToArray() {
  indexesArray.push(getRandomIntNumberFromZeroToLessThan(9));
  let currentIndex = getRandomIntNumberFromZeroToLessThan(9);

  while (indexesArray.includes(currentIndex)) {
    currentIndex = getRandomIntNumberFromZeroToLessThan(9);
  }
  indexesArray.push(currentIndex);
}

function getTwoRandomCompanies(companiesArray) {
  setTwoDifferentIndexNumbersToArray();
  twoCompanies = indexesArray.map(index => {
    return companiesArray[index];
  });
}
//console.log(twoCompanies);

function renderContent(someCompaniesArray) {
  someCompaniesArray.forEach((company) => {
    let divElement = document.createElement("div");
    let h2Element = document.createElement("h2");
    let p1Element = document.createElement("p");
    let p2Element = document.createElement("p");
    let p3Element = document.createElement("p");
    let p4Element = document.createElement("p");
    let aElement = document.createElement("a");
    let imgElement = document.createElement("img");

    h2Element.textContent = company.name;
    p1Element.textContent = company.address;
    p2Element.textContent = company.phoneNumber;
    p3Element.textContent = company.membershipLevel;

    aElement.setAttribute("href", company.webAddress);
    aElement.setAttribute("target", "_blank");
    aElement.textContent = `Go to Website`;
    p4Element.appendChild(aElement);

    imgElement.setAttribute("src", company.image);
    imgElement.setAttribute("alt", company.name);

    divElement.appendChild(imgElement);
    divElement.appendChild(h2Element);
    divElement.appendChild(p1Element);
    divElement.appendChild(p2Element);
    divElement.appendChild(p3Element);
    divElement.appendChild(p4Element);

    SPOTS_BOX.appendChild(divElement);
  });
}

// Using the built-in fetch method, calls this URL:
function main() {
  fetch(COMPANIES_URL)
    .then(tryingToConvertResponseToJson)
    .then((jsonResult) => {
      console.log(jsonResult);
      companiesArray = jsonResult;
      getTwoRandomCompanies(companiesArray);
      renderContent(twoCompanies);
    });
}

main();
/*despues probar esto:
fetch('https://davidwalsh.name/demo/arsenal.json')
.then(function(response) {
  // Convert to JSON
  return response.json();
}).then(function(j) {
  // Yay, `j` is a JavaScript object
  console.log(j);
});*/