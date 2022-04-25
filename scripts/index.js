// Store the wallet amount to your local storage with key "amount"


let initialValue = 0
// if(sumWithInitial == undefined)
// {
//     initialValue = 0
// }else{
//    initialValue =sumWithInitial
// }
let Amount = JSON.parse(localStorage.getItem("amount"))||[]
function addToWallet(){

    
    
    const sumWithInitial = Amount.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  
  
    let wallet = document.getElementById("amount").value;

    Amount.push(+wallet)

    // console.log(Amount)
    document.getElementById("wallet").innerText = sumWithInitial
    localStorage.setItem("amount",JSON.stringify(Amount))

    
    
}