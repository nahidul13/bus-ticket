//add btn bg------------------------------------
function selectSeatID(id) {
  const seat = document.getElementById(id);
  seat.classList.add("bg-green-200");
}
//remove btn bg-------------------------------------------
function removeSelectsSeatById(id) {
  const seat = document.getElementById(id);
  seat.classList.remove("bg-green-200");
}
//calculate price--------------------------------------
function calculatePrice(num) {
  //set number of seat
  const seatNum = document.getElementById("numberSeat");
  seatNum.innerText = num;
  //show the total price
  const total = num * 550;
  const totalAmount = document.getElementById("totalPrice");
  totalAmount.innerText = total;
}

//add seat info---------------------------------------------
function addSeatInfoId(seatinfo) {
  //create div
  const seats = document.getElementById("newSeat1");
  const newDiv = document.createElement("div");

  newDiv.classList.add(
    "flex",
    "text-xl",
    "font-semibold",
    "justify-between",
    "py-2"
  );
  newDiv.innerHTML = `
     <p>${seatinfo}</p>
     <p>Economy</p>
     <p>550</p>
    
  `;
  const id1 = seatinfo + "1";

  newDiv.setAttribute("id", id1);

  seats.appendChild(newDiv);
}

//remove seat info ----------------------------------------
function removeSeatInfoById(info) {
  const seat = document.getElementById("newSeat1");
  const id1 = info + "1";
  const rev = document.getElementById(id1);

  seat.removeChild(rev);
}

//check coupon function
function apply() {
  const code1 = document.getElementById("firstCoupon").innerText;
  const code2 = document.getElementById("secondCoupon").innerText;
  const mainAmount = document.getElementById("totaldiscountPrice");
  let totalAmount = parseInt(document.getElementById("totalPrice").innerText);
  // console.log(typeof totalAmount);

  console.log("first code ", typeof code1, " = ", code1);
  console.log("second code ", typeof itemseat, " = ", itemseat);
  console.log("total taka", typeof totalAmount, "= ", totalAmount);
  if (itemseat === code1) {
    const discount1 = totalAmount * (15 / 100);
    const couponDis = totalAmount - discount1;
    console.log("discount1= ", discount1);
    console.log("discountAmount = ", couponDis);
    mainAmount.innerText = couponDis;
  } else {
    console.log("not match");
  }
  // mainAmount.innerText = couponDis;
}
