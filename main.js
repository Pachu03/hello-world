let account = document.getElementById("account");

let btnDecrease = document.getElementsByClassName("btn")[0];
let btnReset = document.getElementsByClassName("btn")[1];
let btnIncrease = document.getElementsByClassName("btn")[2];

let decrease = () => {
  let currentValue = parseInt(account.textContent);
  if (!isNaN(currentValue)) {
    account.textContent = currentValue - 1;
  }
};

let reset = () => {
  account.textContent = 0;
};

let increase = () => {
  let currentValue = parseInt(account.textContent);
  if (!isNaN(currentValue)) {
    account.textContent = currentValue + 1;
  }
};

btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);
btnIncrease.addEventListener("click", increase);
