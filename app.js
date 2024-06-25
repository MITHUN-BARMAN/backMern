const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
populateUI();

let ticketPrice = +movieSelect.value; //"+" = parseInt;

//console.log(typeof ticketPrice);

function movieData(movieIndex, moviePrice){
    localStorage.setItem("movieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSel(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
        //console.log(selectedSeats);

  const seatsIndex = [...selectedSeats].map(function(seat) {   //map array create kore
    return [...seats].indexOf(seat);
  });

   //console.log(seatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selseatCount = selectedSeats.length;

    count.innerText =selseatCount;
    total.innerText = selseatCount * ticketPrice
}

function populateUI(){
   const selectedSeat =  JSON.parse(localStorage.getItem("selectedSeats"))
   //console.log(selectedSeat);
}

movieSelect.addEventListener("change", e=>{     //e=> = function(e)
    
    //console.log(e.target);
    ticketPrice = +e.target.value;
    movieData(e.target.selectedIndex, e.target.value);
    updateSel();
});


container.addEventListener("click", function(e) {
    //console.log(e.target);
    if(
        e.target.classList.contains("seat") && !e.target.classList.contains("occupied")
    ){
         e.target.classList.toggle("selected");

         updateSel();
    }
})