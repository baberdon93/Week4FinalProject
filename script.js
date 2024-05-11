// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=a4f6e502

// s	Yes		<empty>	Movie title to search for.



document.addEventListener('DOMContentLoaded', function() {
    const movieElement = document.querySelector('.movie__wrapper');
    let numResultsDisplayed = 6;
    const apiKey = 'a4f6e502';

    async function fetchMovies(searchItem) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchItem}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        return data.Search || [];
    }

    function displayMovies(movies) {
        if (movies.length === 0) {
            movieElement.innerHTML = '<p>No movies found</p>';
           return;
        }
        const moviesToShow = movies.slice(0, numResultsDisplayed);
        const html = moviesToShow.map(movie => createMovieHTML(movie)).join('');
        movieElement.innerHTML = html;
        if (movies.length > numResultsDisplayed) {
            const button = document.createElement('button');
            button.textContent = 'Show More';
            button.classList.add('show-more-button');
            button.addEventListener('click', showMoreResults);
            movieElement.appendChild(button);
        }
    }

    function createMovieHTML(movie) {
        return `<div class="movie">
            <div class="movie__img">
                <img class="img2" src="${movie.Poster}" alt="">
                <div class="movie__content">
                    <h1 class="title">${movie.Title}</h1>
                    <h1>${movie.Year}</h1>
                    <p><a class="movie__info" href="#" data-imdbid="${movie.imdbID}">MORE INFO</a></p>
                </div>
            </div>
        </div>`;
    }

    async function showMoreResults() {
        numResultsDisplayed += 6;
        const searchItem = document.getElementById('searchInput').value;
        try {
            const movies = await fetchMovies(searchItem);
            displayMovies(movies);
        } catch (error) {
            console.error('Error fetching movie data:', error);
            movieElement.innerHTML += '<p>Error fetching more movies</p>';
        }
    }

    async function handleSearch() {
        numResultsDisplayed = 6;
        const searchItem = document.getElementById('searchInput').value;
        movieElement.innerHTML = '<div class="spinner"></div>';
        try {
            const movies = await fetchMovies(searchItem);
            displayMovies(movies);
        } catch (error) {
            console.error('Error fetching movie data:', error);
            movieElement.innerHTML = error.message === 'Failed to fetch' ?
                '<p>Error fetching data</p>' :
                '<p>Request timed out</p>';
        }
    }

    document.getElementById('searchButton').addEventListener('click', handleSearch);
    movieElement.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            localStorage.setItem('imdbID', event.target.dataset.imdbid);
            window.location.href = 'home.html';
        }
    });
});