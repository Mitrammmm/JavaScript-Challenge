    async function getRandomQuote() {
        try {
            const selectedType = document.getElementById('quote-type').value;

            let apiUrl = '';

            if (selectedType !== 'default') {
                apiUrl = `https://api.quotable.io/random?type=${selectedType}`;  /*API USED!!!!!!*/
            }

            const response = await fetch(apiUrl);
            const data = await response.json();

            displayQuote(data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    function displayQuote(quote) {
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');

        quoteText.textContent = quote.content;
        quoteAuthor.textContent = `- ${quote.author}`;
    }

    function changeTheme() {
        const body = document.body;
        const currentBackgroundColor = window.getComputedStyle(body).getPropertyValue('background-color');
        const isLightTheme = currentBackgroundColor === 'rgb(244, 244, 244)';

        body.style.backgroundColor = isLightTheme ? '#2c3e50' : '#f4f4f4';
    }

    // Default quote and autor!!
    displayQuote({
        content: "Everybody knows the path but only few follow it",
        author: "Mitra"
    });
