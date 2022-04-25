// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let data = JSON.parse(localStorage.getItem("amount"))
// console.log(data)

const initialValue = 0;
    const sumWithInitial = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
document.getElementById("wallet").innerText = sumWithInitial

let Movies = JSON.parse(localStorage.getItem("movie"))||[];
// console.log(Movies)

let id;

async function SearchMovies(){

    let input = document.getElementById("search").value;

    try{

        const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${input}`)
        
        const data = await res.json()

        const movies = data.Search

        if(movies == undefined)
        {
            return false
        }

        console.log(movies)
        append(movies)

    } catch (err){
        console.log(err)
    }

    function append(data){

        document.getElementById("movies").innerHTML = null

        data.forEach(function (el){

            let box = document.createElement("div");
            box.style.border = "1px solid black"
            box.style.textAlign = "center"
            box.style.paddingBottom = "20px"

            let poster = document.createElement("img");
            poster.src = el.Poster;
            poster.style.width = "100%"
            poster.style.height = "400px"

            let title = document.createElement("h1");
            title.innerText = el.Title

            let button = document.createElement("button");
            button.innerText = "Book Now"
            button.setAttribute("class","book_now")
            button.addEventListener("click",function(){

                addToCart(el)
                window.location.href = "checkout.html"
            })

            

            box.append(poster,title,button);

            document.getElementById("movies").append(box)

        })

        

    }

    function addToCart(el){

        Movies.push(el);
        localStorage.setItem("movie",JSON.stringify(Movies))

    }

    
}



function debouncing(func,delay){

    if(id)
    {
        clearTimeout(id);
    }

    id = setTimeout(function(){

        func()
    },delay)
}
