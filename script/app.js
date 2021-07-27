let displayCurr = document.getElementById("display-curr");
let btn = document.querySelectorAll("input");
let subDisplay = document.getElementById("display-pre");

let screenValue = "";
for (items of btn) {
  items.addEventListener("click", (e) => {
    let btnValue = e.target.value;

    if (btnValue == "C") {
      screenValue = "";
      displayCurr.value = screenValue;
      subDisplay.innerHTML = "";
    } else if (btnValue == "=") {
      subDisplay.innerHTML = displayCurr.value;
      displayCurr.value = eval(screenValue);
    } else {
      screenValue += btnValue;
      displayCurr.value = screenValue;
    }
  });
}
