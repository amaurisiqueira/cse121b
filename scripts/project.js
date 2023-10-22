
import { moviesDiv } from "./projectglobal.js";

import getGenres from "./projectmoviescategory.js";
import fullFillMovies from "./projectfullfillmovies.js";



//fullfill the genres
getGenres();

document.querySelector("#moviecategory").addEventListener("change", () => {
  fullFillMovies();
});
