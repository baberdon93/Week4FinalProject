// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=a4f6e502

// s	Yes		<empty>	Movie title to search for.



// document.addEventListener('DOMContentLoaded', function() {
//     const movieElement = document.querySelector('.movie__wrapper');
//     let numResultsDisplayed = 6;
//     const apiKey = 'a4f6e502';

//     async function fetchMovies(searchItem) {
//         const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchItem}`);
//         if (!response.ok) throw new Error('Failed to fetch');
//         const data = await response.json();
//         return data.Search || [];
//     }

//     function displayMovies(movies) {
//         if (movies.length === 0) {
//             movieElement.innerHTML = '<p>No movies found</p>';
//            return;
//         }
//         const moviesToShow = movies.slice(0, numResultsDisplayed);
//         const html = moviesToShow.map(movie => createMovieHTML(movie)).join('');
//         movieElement.innerHTML = html;
//         if (movies.length > numResultsDisplayed) {
//             const button = document.createElement('button');
//             button.textContent = 'Show More';
//             button.classList.add('show-more-button');
//             button.addEventListener('click', showMoreResults);
//             movieElement.appendChild(button);
//         }
//     }

//     function createMovieHTML(movie) {
//         return `<div class="movie">
//             <div class="movie__img">
//                 <img class="img2" src="${movie.Poster}" alt="">
//                 <div class="movie__content">
//                     <h1 class="title">${movie.Title}</h1>
//                     <h1>${movie.Year}</h1>
//                     <p><a class="movie__info" href="#" data-imdbid="${movie.imdbID}">MORE INFO</a></p>
//                 </div>
//             </div>
//         </div>`;
//     }

//     async function showMoreResults() {
//         numResultsDisplayed += 6;
//         const searchItem = document.getElementById('searchInput').value;
//         try {
//             const movies = await fetchMovies(searchItem);
//             displayMovies(movies);
//         } catch (error) {
//             console.error('Error fetching movie data:', error);
//             movieElement.innerHTML += '<p>Error fetching more movies</p>';
//         }
//     }

//     async function handleSearch() {
//         numResultsDisplayed = 6;
//         const searchItem = document.getElementById('searchInput').value;
//         movieElement.innerHTML = '<div class="spinner"></div>';
//         try {
//             const movies = await fetchMovies(searchItem);
//             displayMovies(movies);
//         } catch (error) {
//             console.error('Error fetching movie data:', error);
//             movieElement.innerHTML = error.message === 'Failed to fetch' ?
//                 '<p>Error fetching data</p>' :
//                 '<p>Request timed out</p>';
//         }
//     }

//     document.getElementById('searchButton').addEventListener('click', handleSearch);
//     movieElement.addEventListener('click', function(event) {
//         if (event.target.tagName === 'A') {
//             event.preventDefault();
//             localStorage.setItem('imdbID', event.target.dataset.imdbid);
//             window.location.href = 'home.html';
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//         document.getElementById('overlay').style.display = 'none'; 
//         document.getElementById('content').style.display = 'block'; 
//     }, 1000);

//     movieDescription();
// });

// async function movieDescription() {
//     try {
//         const movieDesc = await fetch(`https://www.omdbapi.com/?apikey=a4f6e502&i=${localStorage.getItem("imdbID")}`);
//         const movieResult = await movieDesc.json();
        
//         if (!Array.isArray(movieResult)) {
//             renderMovieDescription(movieResult);
//         } else {
//             console.error("No IMDB data found");
//         }
//     } catch (error) {
//         console.error('Error fetching movie description:', error);
//         if (error.name === 'AbortError') {
//             console.error('Request aborted due to timeout');
//         }
//     }
// }

// function renderMovieDescription(movie) {
//     const movieDescriptionEl = document.querySelector('.movie__info--container');
//     movieDescriptionEl.innerHTML = movieDescriptionHTML(movie);
// }

// function movieDescriptionHTML(movie) {
//     return `<div class="movie__img--wrapper">
//         <h1>${movie.Title}</h1>
//         <img class="description__img" src="${movie.Poster}" alt="">
//     </div>
//     <div class="movie__info--wrapper">
//         <h3><span class="titles">Released: </span>${movie.Released}</h3>
//         <h3><span class="titles">Genre: </span>${movie.Genre}</h3>
//         <h3><span class="titles">Director: </span>${movie.Director}</h3>
//         <h3><span class="titles">Actors: </span>${movie.Actors}</h3>
//         <h3><span class="titles">Writer: </span>${movie.Writer}</h3>
//         <h3><span class="titles">Language: </span>${movie.Language}</h3>
//         <h2><span class="plot">Plot: </span>${movie.Plot}</h2>
//     </div>`;
// }

// const scaleFactor = 1 / 20;

// function moveBackground(event) {
//   const shapes = document.querySelectorAll(".shape, .shape2");
//   const x = event.clientX * scaleFactor;
//   const y = event.clientY * scaleFactor;

//   for (let i = 0; i < shapes.length; i++) {
//     const isOdd = i % 2 !== 0;
//     const boolInt = isOdd ? -1 : 1;
//     shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
//   }
// }
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

    // Move background function
    const scaleFactor = 1 / 20;

    function moveBackground(event) {
        const shapes = document.querySelectorAll(".shape, .shape2");
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;

        for (let i = 0; i < shapes.length; i++) {
            const isOdd = i % 2 !== 0;
            const boolInt = isOdd ? -1 : 1;
            shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
        }
    }

    // Add a separate event listener for mouse movement to continue background movement
    document.addEventListener('mousemove', moveBackground);

});

// Rest of your code...

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none'; 
        document.getElementById('content').style.display = 'block'; 
    }, 1000);

    movieDescription();
});

async function movieDescription() {
    try {
        const movieDesc = await fetch(`https://www.omdbapi.com/?apikey=a4f6e502&i=${localStorage.getItem("imdbID")}`);
        const movieResult = await movieDesc.json();
        
        if (!Array.isArray(movieResult)) {
            renderMovieDescription(movieResult);
        } else {
            console.error("No IMDB data found");
        }
    } catch (error) {
        console.error('Error fetching movie description:', error);
        if (error.name === 'AbortError') {
            console.error('Request aborted due to timeout');
        }
    }
}

function renderMovieDescription(movie) {
    const movieDescriptionEl = document.querySelector('.movie__info--container');
    movieDescriptionEl.innerHTML = movieDescriptionHTML(movie);
}

function movieDescriptionHTML(movie) {
    return `<div class="movie__img--wrapper">
        <h1>${movie.Title}</h1>
        <img class="description__img" src="${movie.Poster}" alt="">
    </div>
    <div class="movie__info--wrapper">
        <h3><span>Released: </span>${movie.Released}</h3>
        <h3><span>Genre: </span>${movie.Genre}</h3>
        <h3><span>Director: </span>${movie.Director}</h3>
        <h3><span>Actors: </span>${movie.Actors}</h3>
        <h3><span>Writer: </span>${movie.Writer}</h3>
        <h3><span>Language: </span>${movie.Language}</h3>
        <h2><span class="plot">Plot: </span>${movie.Plot}</h2>
    </div>`;
}