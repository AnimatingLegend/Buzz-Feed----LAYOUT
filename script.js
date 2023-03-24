let finalSentence = document.querySelector(".results");
let button = document.querySelector(".click");

let area1 = "Urban";
let area2 = "Rural";

button.onclick = function() {
  let number = parseInt(document.querySelector(".age").value); // number = age
  let area = document.querySelector(".area-type").value;
  finalSentence.style.display = "block";

  // images - PLACEHOLDER STUFF
  let ph1 = "assets/images/";
  let ph2 = "assets/images/";
  let ph3 = "assets/images/";
  let ph4 = "assets/images/";

  // area 1 - urban
  if (number <= 20 && area === area1) {
    finalSentence.innerHTML = "You are " + number + " years old,"
      + " & you like " + area + " areas."
      + " You should visit [PUT URBAN AREA HERE]! " + "<img class='result-img' src=" + ph1 + ">";

  } else if (number >= 20 && area === area1) {
    finalSentence.innerHTML = "You are " + number + " years old."
      + " & you like " + area + " areas."
      + " You should visit [PUT URBAN AREA HERE]! " + "<img class='result-img' src=" + ph2 + ">";
  }

  // area 2 - rural
  if (number <= 20 && area === area2) {
    finalSentence.innerHTML = "You are " + number + " years old."
      + " & you like " + area + " areas."
      + " You should visit [PUT RURAL AREA HERE]! " + "<img class='result-img' src=" + ph3 + ">";
  } else if (number >= 20 && area === area2) {
    finalSentence.innerHTML = "You are " + number + " years old."
      + " & you like " + area + " areas."
      + " You should visit [PUT RURAL AREA HERE]! " + "<img class='result-img' src=" + ph4 + ">";
  }
};
