function rollDice() {
    // Get element
    var diceElement = document.getElementById('dice');

    // Generating num b/w 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // updating output!!
    diceElement.innerText = randomNumber;
}


