"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = "?";

//const score = document.querySelector(".score");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".score").textContent = score;
  if (!guess) {
    document.querySelector(".message").textContent =
      "Πρέπει να μαντέψεις εναν αριθμό!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Μπράβο! Κέρδισες το παιχνίδι!";

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent =
        "Ο αριθμός που έβαλες είναι μεγαλύτερος 📈";
    } else {
      document.querySelector(".message").textContent = "Λυπάμαι έχασες 😞";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent =
        "Ο αριθμός που έβαλες είναι μικρότερος 📉";
    } else {
      document.querySelector(".message").textContent = "Λυπάμαι έχασες 😞";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "blue";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Ξεκίνα να μαντεύεις...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
