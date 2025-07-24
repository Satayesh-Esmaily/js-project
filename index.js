// ---Login & Access---

let username = prompt("Please enter your username (admin or user):");
let password = prompt("Please enter your password:");

let role, securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
  alert(`✅ Welcome ${role.toUpperCase()}!\nYour security level is: ${securityLevel}`);} 
  else {
  alert("Incorrect Username or Password. NO Access!");
  throw new Error("NO ACCESS");
}

// --- Coffee Shop Calculator ---

let customerName = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));
let coffeeType = prompt("What type of coffee would you like? (espresso / latte / cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?(1/4/6...)"));

let pricePerCup;

if (coffeeType === "espresso") {
  pricePerCup = 10;
} else if (coffeeType === "latte") {
  pricePerCup = 12;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 15;
} else {
  alert("Invalid coffee type!");
  throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// --- Bill Splitter Tip ---
let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3):"));
let tipPercent = parseInt(prompt("What percentage tip would you like to add? (0, 5, 10, or 15):"));

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / splitCount;

// --- Result ---
const resultMessage = `
  <h4> Hello ${customerName}!</h4>
  <p>You ordered <strong>${quantity}</strong> <em>${coffeeType}(s)</em>.</p>
  <ul>
    <li> Original total: $${originalTotal.toFixed(2)}</li>
    <li> Discount: $${discount.toFixed(2)}</li>
    <li> Tip: $${tipAmount.toFixed(2)}</li>
    <li> Total with Tip: $${totalWithTip.toFixed(2)}</li>
    <li> Split between ${splitCount} person(s): $${amountPerPerson.toFixed(2)} each</li>
  </ul>
`;

const outputBox = document.getElementById("result-output");
outputBox.innerHTML = resultMessage;
outputBox.style.display = "block";

