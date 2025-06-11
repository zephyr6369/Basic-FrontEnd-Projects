let words = [
  { word: "audi", hint: "German luxury car brand" },
  { word: "tesla", hint: "Electric vehicle company" },
  { word: "bmw", hint: "German brand with 3-letter name" },
  { word: "honda", hint: "Japanese automaker" },
  { word: "ford", hint: "Popular American car brand" },
  { word: "toyota", hint: "Reliable Japanese carmaker" },
  { word: "nissan", hint: "Japanese brand known for Altima" },
  { word: "kia", hint: "South Korean car brand" },
  { word: "hyundai", hint: "South Korean brand with the Sonata" },
  { word: "jeep", hint: "Famous for off-road vehicles" },
  { word: "volvo", hint: "Swedish automaker known for safety" },
  { word: "jaguar", hint: "British luxury car brand" },
  { word: "mazda", hint: "Japanese brand known for the CX series" },
  { word: "fiat", hint: "Italian compact car maker" },
  { word: "porsche", hint: "High-performance German sports car brand" },
  { word: "subaru", hint: "Japanese brand with symmetrical AWD" },
  { word: "chevy", hint: "Nickname for Chevrolet" },
  { word: "dodge", hint: "American brand known for muscle cars" },
  { word: "renault", hint: "French car manufacturer" },
  { word: "peugeot", hint: "Another well-known French car brand" },
  { word: "suzuki", hint: "Japanese company known for small cars" },
  { word: "lexus", hint: "Luxury division of Toyota" },
  { word: "infiniti", hint: "Luxury division of Nissan" },
  { word: "skoda", hint: "Czech brand owned by Volkswagen" },
  { word: "bentley", hint: "British ultra-luxury carmaker" },
  { word: "bugatti", hint: "Very fast and expensive French car" },
  { word: "ferrari", hint: "Italian sports car, red in color" },
  { word: "lamborghini", hint: "Luxury sports car with bull logo" },
  { word: "mclaren", hint: "British maker of supercars" },
  { word: "rollsroyce", hint: "High-end British luxury brand" },
  { word: "mini", hint: "Small British car, now owned by BMW" },
  { word: "genesis", hint: "Luxury brand from Hyundai" },
  { word: "chery", hint: "Chinese carmaker" },
  { word: "mg", hint: "British brand, now Chinese owned" },
  { word: "maruti", hint: "Popular Indian car company" },
  { word: "tata", hint: "Indian company that owns Jaguar" },
  { word: "byd", hint: "Chinese electric car manufacturer" },
  { word: "hummer", hint: "Big American SUV, now electric" },
  { word: "lincoln", hint: "Luxury division of Ford" },
  { word: "ram", hint: "Truck brand spun off from Dodge" },
  { word: "saab", hint: "Old Swedish car brand" },
  { word: "isuzu", hint: "Japanese brand known for trucks" },
  { word: "scion", hint: "Defunct Toyota sub-brand" },
  { word: "daewoo", hint: "Old Korean brand, now part of GM" },
  { word: "alfa", hint: "Italian brand known for style" },
  { word: "astonmartin", hint: "James Bond’s favorite car" },
  { word: "citroen", hint: "French carmaker with unique designs" },
  { word: "datsun", hint: "Nissan’s old budget brand" },
  { word: "opel", hint: "German brand, now under Stellantis" },
  { word: "geely", hint: "Chinese company that owns Volvo" }
];

let selected = words[Math.ceil(Math.random() * words.length)];
let word = selected.word;
let hint = selected.hint;
let guessed = [];
let displayWord = [];

for (let i = 0; i < word.length; i++) {
  displayWord[i] = "_";
}

document.getElementById("hint").textContent = "Hint: " + hint;
document.getElementById("wordDisplay").textContent = displayWord.join(" ");
document.getElementById("message").textContent = "";

document.getElementById("letterInput").addEventListener("input", function () {
  let letter = this.value;
  this.value = "";

  if (letter.length !== 1 ) {
    document.getElementById("message").textContent = "Enter a valid single letter.";
    return;
  }


  guessed.push(letter);

  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      displayWord[i] = letter;
      found = true;
    }
  }

  document.getElementById("wordDisplay").textContent = displayWord.join(" ");
  document.getElementById("message").textContent = found ? "Correct guess!" : "Wrong guess!";

  if (!displayWord.includes("_")) {
    document.getElementById("message").textContent = "You guessed it! The car brand was \"" + word + "\".";
  }
});