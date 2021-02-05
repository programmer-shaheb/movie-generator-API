const apiURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=fa5ea333b70cb2d31242b63505d763e6";
const imgPATH = "https://image.tmdb.org/t/p/w1280";
const searchAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=fa5ea333b70cb2d31242b63505d763e6&query=";

const main = document.querySelector(".main-sec");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiURL);
function showMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        const el = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("h2");
        // console.log(element.title);
        text.innerHTML = `${element.title}`;
        image.src = imgPATH + element.poster_path;

        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;

  // console.log(searchTerm);

  if (searchTerm) {
    showMovies(searchAPI + searchTerm);
    search.value = "";
  }
});
