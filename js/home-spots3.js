
const COMPANIES_URL = "json/data.json";
const SPOTS_BOX = document.querySelector("#spots-box");
let companiesArray = [];
let indexesArray = [];
let twoCompanies = [];

async function getCompanies() {
  let response = await fetch(COMPANIES_URL);
  if (response.ok) {
    companies = await response.json();
    console.log(companies);
    //Calling to function that uses data
    renderCompanies(companies);
  } else {
    throw Error(response.statusText);
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

