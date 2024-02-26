// Generating a random number
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Checking users guessed number
function checkGuess() {

    // Getting the number from input
    const userGuess = parseInt(document.getElementById("guess").value);          

    // Firstly checking entered num is vakid or not
    if (userGuess && userGuess >= 1 && userGuess <= 100) {

        // comapring guessed and secret number
        if (userGuess === secretNumber) {
            displayMessage("Congratulations! You guessed the correct number!");
        } else if (userGuess < secretNumber) {
            displayMessage("Too low. Try again!");
        } else {
            displayMessage("Too high. Try again!");
        }
    } else {
        displayMessage("Please enter a valid number between 1 and 100.");
    }

    // clearing input field
    document.getElementById("guess").value = "";
}

// displaying hints
function displayMessage(message) {

    document.getElementById("hint").innerText = message;
    
}
