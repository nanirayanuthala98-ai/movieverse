const API_KEY="f18b931d";

const searchInput = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const moviesContainer = document.getElementById("moviesContainer");

async function searchMovies(movieName) {
    const response = await fetch(`https://www.omdbapi.com/?=s${movieName}&apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
}

searchInput.addEventListener("click", () => {
    const movieName = searchInput.value.trim();
    searchMovies(movieName);
});
function displayMovies(movies) {
    moviesContainer.innerHTML="";
    movies.forEach(movie => {
        moviesContainer.innerHTML += `
        <div class="movie">
            <image src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        </div>
        `;
       
})
}