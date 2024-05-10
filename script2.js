
// LOADING STATE,CONFUSED ME SO IT GOES UP TOP
window.addEventListener('load', function() {

    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none'; 
        document.getElementById('content').style.display = 'block'; 
    }, 1000);
});

async function movieDescription() {
    try {
        const timeout = 2000; 
        const movieDesc = await fetch(`https://www.omdbapi.com/?apikey=a4f6e502&i=${localStorage.getItem("imdbID")}`);
        
        let movieResult = await movieDesc.json();
        if (!Array.isArray(movieResult)) {
            movieResult = [movieResult];
        }

        const movieDescriptionEl = document.querySelector('.movie__info--container');
        movieDescriptionEl.innerHTML = movieResult.map((movie) => movieDescriptionHTML(movie)).join('');

        if (movieResult.Event) {
            movieDescriptionEl.innerHTML = movieResult.Event.map((movie) => movieDescriptionHTML(movie)).join('');
        }
        else {
            console.error("No IMDB data found");
        }
    } catch (error) {
        console.error('Error fetching movie description:', error);
        if (error.name === 'AbortError') {
            console.error('Request aborted due to timeout');
        }
    }
}
movieDescription()



function movieDescriptionHTML(movie) {
    return `<div class="movie__img--wrapper">
    <h1>${movie.Title}</h1>
    <img class="description__img" src="${movie.Poster}" alt="">
</div>
<div class="movie__info--wrapper">
    <h3><span class="titles">Released: </span>${movie.Released}</h3>
    <h3><span class="titles">Genre: </span>${movie.Genre}</h3>
    <h3><span class="titles">Director: </span>${movie.Director}</h3>
    <h3><span class="titles">Actors: </span>${movie.Actors}</h3>
    <h3><span class="titles">Writer: </span>${movie.Writer}</h3>
    <h3><span class="titles">Language: </span>${movie.Language}</h3>
    <h2><span class="plot">Plot: </span>${movie.Plot}</h2>
</div>`
}
