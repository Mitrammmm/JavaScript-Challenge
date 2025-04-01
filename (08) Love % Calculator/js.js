document.getElementById('check-love').addEventListener('click', () => {
    const yourName = document.getElementById('your-name').value;
    const crushName = document.getElementById('crush-name').value;

    if (yourName.trim() === '' || crushName.trim() === '') {
        alert('Please enter both names.');
        return;
    }

    showLoadingScreen();

    setTimeout(() => {
        // const lovePercentage = Math.floor(Math.random() * 101);

        let lovePercentage = 0;

        // Helper functions
        const getSurname = (name) => name.split(" ").slice(1).join(" ");
        const countVowels = (name) => (name.match(/[aeiouAEIOU]/g) || []).length;
        const countConsonants = (name) => (name.match(/[^aeiouAEIOU\s]/g) || []).length;
        const asciiSum = (name) => name.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
        const matchingCharsPercentage = (a, b) => {
            let matches = 0;
            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                if (a[i].toLowerCase() === b[i].toLowerCase()) matches++;
            }
            return (matches / Math.max(a.length, b.length)) * 30;
        };
    
        // First Name Same +10
        if (yourName.split(" ")[0].toLowerCase() === crushName.split(" ")[0].toLowerCase()) {
            lovePercentage += 10;
        } else {
            lovePercentage += 5;
        }
    
        // Surname Same +10
        if (getSurname(yourName).toLowerCase() === getSurname(crushName).toLowerCase()) {
            lovePercentage += 10;
        } else {
            lovePercentage += 3;
        }
    
        // Name Length Same +10
        if (yourName.length === crushName.length) {
            lovePercentage += 10;
        } else {
            lovePercentage += 5;
        }
    
        // Starting Letter Same +7
        if (yourName[0].toLowerCase() === crushName[0].toLowerCase()) {
            lovePercentage += 7;
        } else {
            lovePercentage += 3;
        }
    
        // Ending Letter Same +5
        if (yourName.slice(-1).toLowerCase() === crushName.slice(-1).toLowerCase()) {
            lovePercentage += 5;
        } else {
            lovePercentage += 2;
        }
    
        // Same Number of Vowels +8
        if (countVowels(yourName) === countVowels(crushName)) {
            lovePercentage += 8;
        } else {
            lovePercentage += 4;
        }
    
        // Same Number of Consonants +7
        if (countConsonants(yourName) === countConsonants(crushName)) {
            lovePercentage += 7;
        } else {
            lovePercentage += 3;
        }
    
        // ASCII Sum Same +8
        if (asciiSum(yourName) === asciiSum(crushName)) {
            lovePercentage += 8;
        } else {
            lovePercentage += 4;
        }
    
        // Matching Characters Percentage (up to 30)
        lovePercentage += matchingCharsPercentage(yourName, crushName);
    
        // Cap the percentage at 100
        lovePercentage = Math.min(Math.round(lovePercentage), 100);
    
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
