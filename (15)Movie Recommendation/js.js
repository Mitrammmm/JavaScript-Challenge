const apiKey = 'HERE'; // USE UR OWN OMDB API KEY

        async function getMovies() {
            const response = await fetch(`https://www.omdbapi.com/?s=action&apikey=${apiKey}`);
            const data = await response.json();
            return data.Search || [];
        }

        function createMovieCard(movie) {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            const image = document.createElement('img');
            image.src = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300';
            image.alt = movie.Title;
            image.classList.add('movie-image');

            const details = document.createElement('div');
            details.classList.add('movie-details');
            details.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            `;

            card.appendChild(image);
            card.appendChild(details);

            return card;
        }

        async function displayMovies() {
            const movies = await getMovies();
            const app = document.getElementById('app');

            movies.forEach(movie => {
                const card = createMovieCard(movie);
                app.appendChild(card);
            });
        }

        displayMovies();


        async function searchMovies(query) {
            const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
            const data = await response.json();
            return data.Search || [];
        }

        const searchBar = document.getElementById('search-bar');
        searchBar.addEventListener('input', async () => {
            const query = searchBar.value.trim();
            if (query.length > 0) {
                const movies = await searchMovies(query);
                displaySearchedMovies(movies);
            } else {
                
                displayMovies();
            }
        });

        function displaySearchedMovies(movies) {
            const app = document.getElementById('app');
            app.innerHTML = ''; 

            movies.forEach(movie => {
                const card = createMovieCard(movie);
                app.appendChild(card);
            });
        }