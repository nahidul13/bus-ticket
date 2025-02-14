//    variable
let numberOfseat = 0;
let totalSeat = 0;
//when click btn--------------------------
function btnclick(event) {
  const innerTag = event.target;
  if (!innerTag.classList.contains("bg-green-200")) {
    // innerTag.classList.add("bg-green-500");
    if (numberOfseat < 4) {
      selectSeatID(event.target.innerText);
      numberOfseat++;
      addSeatInfoId(event.target.innerText);
    }
  } else {
    if (0 < numberOfseat) {
      removeSelectsSeatById(event.target.innerText);
      numberOfseat--;
      removeSeatInfoById(event.target.innerText);
    }

    // innerTag.classList.remove("bg-green-200");
  }
  //   console.log(numberOfseat);
  calculatePrice(numberOfseat);
}

document.addEventListener("click", btnclick);
