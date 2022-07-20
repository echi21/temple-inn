// COMPANIES

const COMPANIES_URL = "json/data.json";
const SPOTS_BOX = document.querySelector("#spots-box");
let companiesArray = [];
let indexesArray = [];
let twoCompanies;
let silverGoldCompaniesArray = [];

async function getCompanies() {
  const response = await fetch(COMPANIES_URL);
  if (response.ok) {
    const data = await response.json();
    //console.log(data);
    //Calling to function that uses data
    storeCompanies(data);
  } else {
    throw Error(response.statusText);
  }
}

function storeCompanies(jsonResult) {
  jsonResult.forEach(company => {
    companiesArray.push(company);
  })
}

/*-------------------------------------------------------------------------------------------------------------------*/

function todoEnUno() {
  companiesArray.forEach(company => {
    console.log(company);
    if (company.membershipLevel === "Silver Membership" || company.membershipLevel === "Gold Membership") {
      silverGoldCompaniesArray.push(company);
    }
  });

  function getRandomIntNumberFromZeroToLessThan(number) {
    return Math.floor(Math.random() * number);
  }
  //First set Two Different Index Numbers into an Array
  indexesArray.push(getRandomIntNumberFromZeroToLessThan(9));
  let currentIndex = getRandomIntNumberFromZeroToLessThan(9);
  // Checks that index number are not equal
  while (indexesArray.includes(currentIndex)) {
    currentIndex = getRandomIntNumberFromZeroToLessThan(9);
  }
  indexesArray.push(currentIndex);

  twoCompanies = indexesArray.map(index => {
    return companiesArray[index];
  });

  twoCompanies.forEach((company) => {
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

/*
function getSilverGoldCompanies(companiesArray) {
  companiesArray.forEach(company => {
    console.log(company);
    if (company.membershipLevel === "Silver Membership" || company.membershipLevel === "Gold Membership") {
      silverGoldCompaniesArray.push(company);
    }
  });
}*/
/*
for (let i = 0; i < companiesArray.length; i++) {
  console.log(companiesArray[i]);
}*/

/*
getSilverGoldCompanies(companiesArray);
console.log(`inside getSilverGoldCompanies: `);
console.log(silverGoldCompaniesArray);
*/
/*
function getRandomIntNumberFromZeroToLessThan(number) {
  return Math.floor(Math.random() * number);
}

function getTwoRandomCompanies(companiesArray) {
  //First set Two Different Index Numbers into an Array
  indexesArray.push(getRandomIntNumberFromZeroToLessThan(9));
  let currentIndex = getRandomIntNumberFromZeroToLessThan(9);
  // Checks that index number are not equal
  while (indexesArray.includes(currentIndex)) {
    currentIndex = getRandomIntNumberFromZeroToLessThan(9);
  }
  indexesArray.push(currentIndex);

  twoCompanies = indexesArray.map(index => {
    return companiesArray[index];
  });
  //console.log(twoCompanies);
}*/

function renderCompanies(jsonResult) {
  //getSilverGoldCompanies(jsonResult);
  //getTwoRandomCompanies(silverGoldCompaniesArray);
  twoCompanies.forEach((company) => {
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
/*async function main2() {
  await fetch(COMPANIES_URL)
    .then(tryingToConvertResponseToJson)
    .then((jsonResult) => {
      companies = (jsonResult);
      return companies;
      //getSilverGoldCompanies(jsonResult);
      //getTwoRandomCompanies(silverGoldCompaniesArray);
    });
}*/

getCompanies();
console.log(`Proveniente de storeCompanies:`);
console.log(companiesArray);
