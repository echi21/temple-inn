
/*********************************************************************************************************************/
// setting the messages fot the different membership options for the join.html page
/*const nonProfit = `This is for non-profit organizations and there is no fee. With this option you are welcome to read
and receive our news through your e-mail address.`;

const bronze = `This is an affordable option for those who want to experiment and not spend too much.
It has a monthly cost of $100. With it, you have the right to receive professional advice for your business,
and during the month you can receive 3 training sessions, advertising on our site, and new newsletters.`;

const silver = `This is a prominent option for those who want higher profits. It has a monthly cost of $250.
With it, you have the right to receive professional advice for your business 8 hours a day during working days,
and during the month you can receive 8 training sessions, 10 advertisements on our site, discounts on events,
4 scheduled access to our golf course, newsletters and much more.`;

const gold = `This is the best option for those who want all the benefits we have in our community. It has a
monthly cost of $400. With it, you have the right to receive professional advice for your business 8 hours a day
throughout the week, and during the month you can receive all the training that is available, 30 advertisements
on our site, discounts on events, trips and purchases, free scheduled access to our golf course, credits for
investment, newsletters and much more.`;

const benefits = document.getElementById("benefits");
const radiosElements = document.getElementsByClassName("radios");
*/

/*
Array.from(radiosElements).forEach(radio => {
  radio.addEventListener("click", () => {
    switch (radio.getAttribute("value")) {
      case "np":
        benefits.innerText = nonProfit;
        break;
      case "bm":
        benefits.innerText = bronze;
        break;
      case "sm":
        benefits.innerText = silver;
        break;
      case "gm":
        benefits.innerText = gold;
        break;
    }
  })
});
*/
const formSubmittedTime = document.getElementById("date-time");
const submitButton = document.querySelector("#submit-btn");

submitButton.addEventListener("click", () => {
  formSubmittedTime.innerText = `${currentDate}`;
  formSubmittedTime.style.setProperty("display", "none");
  console.log(formSubmittedTime.innerText);
});

/*********************************************************************************************************************/