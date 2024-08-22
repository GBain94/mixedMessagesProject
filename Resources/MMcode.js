
let youAre = ["You are Cancer", "You are Taurus", "You are Sagittarius", "You are Virgo", "You are Aries", "You are Gemini", "You are Leo", "You are Libra", "You are Scorpio"];
let whichMeans = ["You are sensitive", "You are stubborn", "You are adventurous", "You are analytical"];
let conditional = ["unless other indicators contradict this", "which is amplified by your other placements"];
 


let counter = 1;
function printString() {
do {
    counter ++;
    let randomElement1 = youAre[Math.floor(Math.random() * youAre.length)];
    let randomElement2 = whichMeans[Math.floor(Math.random() * whichMeans.length)];
    let randomElement3 = conditional[Math.floor(Math.random() * conditional.length)];
    return document.getElementById("results").innerHTML = `${randomElement1}. ${randomElement2}, ${randomElement3}`; 
  
} while (counter < 99);
};
