//add btn bg------------------------------------
function selectSeatID(id) {
  const seat = document.getElementById(id);
  seat.classList.add("bg-green-200");
}
//remove btn bg-----------------------------------------
function removeSelectsSeatById(id) {
  const seat = document.getElementById(id);
  seat.classList.remove("bg-green-200");
}
//calculate price--------------------------------------
function calculatePrice(num) {
  const seatNum = document.getElementById("numberSeat");
  seatNum.innerText = num;
  //create div
  const seats = document.getElementById("newSeat");
  const price = 550;
}

//add seat info---------------------------------------------
function addSeatInfoId(seatinfo) {
  //create div
  const seats = document.getElementById("newSeat1");
  const newDiv = document.createElement("div");

  newDiv.classList.add(
    "flex",
    // "gap-x-32",
    "text-xl",
    "font-semibold",

    "justify-between"
  );
  //    "flex gap-x-32 text-xl font-semibold  pb-2 justify-between "
  newDiv.innerHTML = `
     <p>${seatinfo}</p>
     <p>Economy</p>
     <p>550</p>
    
  `;
  const id1 = seatinfo + "1";
  // console.log(id1);
  newDiv.setAttribute("id", id1);
  //   newDiv.id = setinfo;
  seats.appendChild(newDiv);
}

//remove seat info ----------------------------------------
function removeSeatInfoById(info) {
  const seat = document.getElementById("newSeat1");
  const id1 = info + "1";
  const rev = document.getElementById(id1);
  console.log(id1);
  seat.removeChild(rev);
  //   rev.parentNode.removeChild(rev);
}
