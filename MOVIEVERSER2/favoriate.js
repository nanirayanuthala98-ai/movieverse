const favoritesContainer =document.getElementById("favoritesContainer");

const favorites =JSON.parse(localStorage.getItem("favorites"))||[];

favorites.forEach(movie=>{

favoritesContainer.innerHTML +=
`
<div class="movie-card">

<img
src="${movie.Poster}">

<h3>
${movie.Title}
</h3>

<p>
${movie.Year}
</p>

</div>
`;

});