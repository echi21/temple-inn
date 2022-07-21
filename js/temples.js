
const WEB_ADDRESS = "json/data.json";
const DIRECTORY_CARDS = document.querySelector("#directory-cards");
const GRID_BUTTON = document.querySelector("#grid-btn");
const LIST_BUTTON = document.querySelector("#list-btn");
let companiesArray = [];

GRID_BUTTON.addEventListener("click", () => {
  DIRECTORY_CARDS.classList.remove("list");
});

LIST_BUTTON.addEventListener("click", () => {
  DIRECTORY_CARDS.classList.add("list");
});

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

function renderContent(companiesArray) {
  companiesArray.forEach((company) => {
    let sectionElement = document.createElement("section");
    let h3Element = document.createElement("h3");
    let p1Element = document.createElement("p");
    let p2Element = document.createElement("p");
    let p3Element = document.createElement("p");
    let p4Element = document.createElement("p");
    let aElement = document.createElement("a");
    let imgElement = document.createElement("img");

    h3Element.textContent = company.name;
    p1Element.textContent = company.address;
    p2Element.textContent = company.phoneNumber;
    p3Element.textContent = company.membershipLevel;

    aElement.setAttribute("href", company.webAddress);
    aElement.setAttribute("target", "_blank");
    aElement.textContent = `Go to Website`;
    p4Element.appendChild(aElement);

    imgElement.setAttribute("src", company.image);
    imgElement.setAttribute("alt", company.name);

    sectionElement.appendChild(imgElement);
    sectionElement.appendChild(h3Element);
    sectionElement.appendChild(p1Element);
    sectionElement.appendChild(p2Element);
    sectionElement.appendChild(p3Element);
    sectionElement.appendChild(p4Element);

    DIRECTORY_CARDS.appendChild(sectionElement);
  });
}

// Using the built-in fetch method, calls this URL:
function main() {
  fetch(WEB_ADDRESS)
    .then(tryingToConvertResponseToJson)
    .then((jsonResult) => {
      console.log(jsonResult);
      companiesArray = jsonResult;
      renderContent(companiesArray);
    });
}

main();
