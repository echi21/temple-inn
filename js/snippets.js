/*const labels = document.getElementById("labels");
let membershipValue;
/*labels.addEventListener(onclick, () => {
  labels.forEach(label => {
    //membershipValue = label.children[0].getAttribute("value");
    membershipValue = label.children[0].getAttribute("value");
    console.log(membershipValue);
  });

  switch (membershipValue) {
    case "np":
      console.log("Primer hijo");
      break;
    case "bm":
      console.log("Segundo hijo");
      break;
    case "sm":
      console.log("Tercer hijo");
      break;
    case "gm":
      console.log("Cuarto hijo");
      break;

    default:
      console.log("Primer hijo");
      break;
  }

});
/*
console.log(labels);
console.log();
let label = labels.children[1];
console.log(label);
console.log();
let membershipValue = label.children[0].getAttribute("value");
console.log(membershipValue);

*/
/*
const rb = document.getElementsByClassName("radios");
//console.log(rb);
for (let i = 0; i < rb.length; i++) {
  let opt = rb[i]
    opt.addEventListener("click", () => {
    const val = opt.getAttribute("value");
      switch (val) {
        case "np":
          console.log("Primer hijo");
          break;
        case "bm":
          console.log("Segundo hijo");
          break;
        case "sm":
          console.log("Tercer hijo");
          break;
        case "gm":
          console.log("Cuarto hijo");
          break;
        default:
          console.log("Primer hijo");
          break;
      }
      console.log(opt);
  });
}*/

/*
function capitalize(string) {
  //split a string into an array of strings whenever a blank space is encountered.
  let stringsArray = string.split(" ");
  //loop through each element of the array.
  for (let i = 0; i < stringsArray.length; i++) {
    //Takes each word from the array. Takes the first letter and convert it to uppercase. Takes the same word. Splits
    //it from after the first letter and converting it to lowercase. Concatenates the first uppercase letter with the
    //rest of the letter in lowercase. Finally, stores it in the array in the same position it was taken from.
    stringsArray[i] = `${stringsArray[i].charAt(0).toUpperCase()}${stringsArray[i].slice(1).toLowerCase()}`;
  }
  //Join all the elements of the array back into one string using a blank space as a separator and returns it.
  return stringsArray.join(" ");
}*/