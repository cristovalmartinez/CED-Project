"use strict";
const UserPin = document
  .querySelector("form")
  .addEventListener("submit", youveBeenAnihalated);
const todaysDateAndTime = document.querySelector("#todaysDateAndTimeText");
const iconKey = document
  .querySelector(".keyboard")
  .addEventListener("click", hideClickPad);

let btn = document.querySelector("#btn1");
btn.addEventListener("click", youveBeenAnihalated);

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", youveBeenAnihalated);

function redirectToCorrectLogins() {
  window.location =
    "https://www.exponenthr.com/service/Kiosklogon.asp?kmachid=273892";
}

function hideClickPad() {
  const keyPad = document.querySelector(".keypad").classList.toggle("hidden");
}

function youveBeenAnihalated(e) {
  e.preventDefault();
  const POPUP = document.querySelector("#POPUP");
  POPUP.classList.remove("hidden");
}

function funcTodaysDateAndTime() {
  const todaysDateAndTime = document.querySelector("#todaysDateAndTimeText");
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let minutes = date.getMinutes();
  let hours = ((date.getHours() + 11) % 12) + 1;
  let time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  todaysDateAndTime.textContent = `${month}/${day}/${year} - ${time.toLowerCase()}`;

  setInterval(funcTodaysDateAndTime, 1000);
}
