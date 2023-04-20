var images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");

		var randomIndex1 = Math.floor(Math.random() * images.length);
		var randomIndex2 = Math.floor(Math.random() * images.length);

		img1.src = images[randomIndex1];
		img2.src = images[randomIndex2];

if( randomIndex1 > randomIndex2) {
    document.getElementById("title").textContent = "🏆Player 1 Wins!";
} else if (randomIndex1 == randomIndex2) {
    document.getElementById("title").textContent = "It's a Draw!";
} else {
    document.getElementById("title").textContent = "Player 2 Wins🏆!";
}