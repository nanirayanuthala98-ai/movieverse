const API_KEY = "26b9ad21";

let currentMovie = null;
const params =
new URLSearchParams(
window.location.search
);

const movieId =
params.get("id");
async function getMovieDetails(){

const response =
await fetch(
`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
);

const data =
await response.json();

displayMovie(data);

}

getMovieDetails();

function displayMovie(movie){
  currentMovie = movie;

document.getElementById(
"movieDetails"
).innerHTML =`
<div class="details-container">

<img
src="${movie.Poster}">

<div>

<h1>${movie.Title}</h1>
<button
onclick="saveFavorite()">

Add To Favorites

</button>
<p>
Year:
${movie.Year}
</p>

<p>
Genre:
${movie.Genre}
</p>

<p>
Director:
${movie.Director}
</p>

<p>
IMDb Rating:
${movie.imdbRating}
</p>

<p>
${movie.Plot}
</p>

</div>

</div>
`;

}

function saveFavorite(){

let favorites =JSON.parse(localStorage.getItem("favorites")) || [];

favorites.push(currentMovie);

localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);

alert(
"Added to Favorites"
);

}

