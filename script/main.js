//    variable declear
let numberOfseat = 0;
let totalSeat = 0;

//when click btn--------------------------
function btnclick(event) {
  const innerTag = event.target;
  if (!innerTag.classList.contains("bg-green-200")) {
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
  }

  calculatePrice(numberOfseat);
}

const seatButtons = document.getElementsByClassName("SeatBtn");
// Loop through the collection and add the event listener to each button
for (let i = 0; i < seatButtons.length; i++) {
  seatButtons[i].addEventListener("click", btnclick);
}

// coupon part----------------------------------
let itemseat = "";
function matchCoupon(event) {
  itemseat = event.target.value.toUpperCase();
}
document.getElementById("coupon").addEventListener("keyup", matchCoupon);
