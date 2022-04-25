// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let data = JSON.parse(localStorage.getItem("amount"))
// console.log(data)

const initialValue = 0;
    const sumWithInitial = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
document.getElementById("wallet").innerText = sumWithInitial


let movieData = JSON.parse(localStorage.getItem("movie"))


movieData.map(function(el){

    let box = document.createElement("div");
            box.style.border = "1px solid black"
            box.style.textAlign = "center"

            let poster = document.createElement("img");
            poster.src = el.Poster;
            poster.style.width = "100%"
            poster.style.height = "400px"

            let title = document.createElement("h1");
            title.innerText = el.Title

            box.append(title,poster);

            document.getElementById("movie").append(box)
})

function Book(){

    let seats = document.getElementById("number_of_seats").value;
    let name = document.getElementById("user_name").value;

    let seat_cost = 100;

    let book_amount = seat_cost*seats

    if(book_amount > sumWithInitial)
    {
        alert("Insufficient Balance !")
    }else {
        alert("Booking Sucessfull !")
        a = sumWithInitial-book_amount;
        document.getElementById("wallet").innerText = a
    }
}