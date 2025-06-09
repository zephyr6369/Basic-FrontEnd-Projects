let from = document.getElementById("fromCurrency");
let to = document.getElementById("toCurrency");
let amount = document.getElementById("amount");
let result = document.getElementById("result");

function convert() {
  let fromCurr = from.value, toCurr = to.value;
  let amt = parseFloat(amount.value); 

if (amt <= 0) {
  result.textContent = "Enter a valid amount";
  return;
}
fetch("https://api.exchangerate-api.com/v4/latest/" + fromCurr)
  .then(res => res.json())
  .then(jsonData => {
    let rate = jsonData.rates[toCurr];
    let total = amt * rate;
    result.textContent = amt + " " + fromCurr + " = " + total.toFixed(2) + " " + toCurr;
  });
}


from.onchange = to.onchange = amount.oninput = convert;
