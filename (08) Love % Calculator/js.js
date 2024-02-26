document.getElementById('check-love').addEventListener('click', () => {
    const yourName = document.getElementById('your-name').value;
    const crushName = document.getElementById('crush-name').value;

    if (yourName.trim() === '' || crushName.trim() === '') {
        alert('Please enter both names.');
        return;
    }

    showLoadingScreen();

    setTimeout(() => {
        const lovePercentage = Math.floor(Math.random() * 101);
        displayLoveResult(lovePercentage);
    }, 6000);
});

function showLoadingScreen() {
    document.getElementById('input-container').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');
}

function displayLoveResult(percentage) {
    document.getElementById('loading-screen').classList.add('hidden');

    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    const lovePercentageElement = document.getElementById('love-percentage');
    lovePercentageElement.textContent = `Love Percentage: ${percentage}%`;

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getLoveQuote(percentage);
}

function getLoveQuote(percentage) {
    if (percentage < 3) {
        return "Oh no! It seems like your love is on vacation. Try sending a postcard!";
    } else if (percentage < 10) {
        return "Well, you're not at zero! There's room for improvement, right?";
    } else if (percentage < 20) {
        return "Hmm, the love-o-meter is warming up. Keep stoking the flames!";
    } else if (percentage < 35) {
        return "Not bad! You're on the radar of love. Keep the signals clear!";
    } else if (percentage < 50) {
        return "The love vibes are getting stronger! Keep the heart emojis coming!";
    } else if (percentage < 65) {
        return "Wow! Love is definitely in the air. Plan a romantic rendezvous!";
    } else if (percentage < 80) {
        return "Fantastic! Your love story is unfolding beautifully. Keep turning the pages!";
    } else if (percentage < 90) {
        return "Incredible! Your love is like a fine wine, getting better with time!";
    } else if (percentage < 97) {
        return "Congratulations! You've hit the jackpot of love. Pop the virtual champagne!";
    } else {
        return "Speechless! Your love is legendary. Time to write a bestseller about it!";
    }
}
