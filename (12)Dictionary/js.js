function lookupWord() {

    const word = document.getElementById('word').value.toLowerCase();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const definitionElement = document.getElementById('definition');
        
        if (Array.isArray(data) && data.length > 0) {
          const definitions = data[0].meanings[0].definitions;
          if (definitions && definitions.length > 0) {
            const definition = definitions[0].definition;
            definitionElement.textContent = `Definition: ${definition}`;
          } else {
            definitionElement.textContent = 'Word not found.';
          }
        } else {
          definitionElement.textContent = `Can't find the meaning of "${word}". Search for another word.`;
        }
      })

      .catch(error => {
        console.error('Error finding data:', error);
        const definitionElement = document.getElementById('definition');
        definitionElement.textContent = 'Error finding data. Please try again later.';
      });

  }