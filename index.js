// ---Login & Access---

let username = prompt("Please enter your username (admin or user):");
let password = prompt("Please enter your password:");

let role, securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
  alert(`✅ Welcome ${role.toUpperCase()}!\nYour security level is: ${securityLevel}`);} 
  else {
  alert("Incorrect username or password. Access denied!");
  throw new Error("Access denied");
}

// --- Coffee Shop Calculator ---

let customerName = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));
let coffeeType = prompt("What type of coffee would you like? (espresso / latte / cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

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
alert(`Hello ${customerName}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${splitCount} person(s): $${amountPerPerson.toFixed(2)} each
`);
