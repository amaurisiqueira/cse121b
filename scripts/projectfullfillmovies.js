import { moviesDiv } from "./projectglobal.js";
import getMovies from "./projectgetmovie.js";

const deleteMovies = () => {
  while (moviesDiv.firstChild) {
    moviesDiv.removeChild(moviesDiv.firstChild);
  }
};

const getArticle = (_movieTitle, _moveYear, _moviePhoto) => {
  console.log("_moviePhoto:" + _moviePhoto);

  /*
    if( _moviePhoto !==  'none'){
        console.log(' Esta OK');

    }  else { 
        console.log(' Encontro NONONO'); 
        
        }
*/
  const myArticle = document.createElement("article");

  const movieTitle = document.createElement("h3");
  const movieYear = document.createElement("h4");

  const moviePhoto = document.createElement("img");
  movieTitle.innerText = _movieTitle;
  movieYear.innerText = _moveYear;

  if (_moviePhoto !== "none") {
    moviePhoto.setAttribute("src", _moviePhoto);
    moviePhoto.setAttribute("alt", `Fist image of ${_movieTitle}`);
  } else {
    moviePhoto.setAttribute("src", "https://placehold.co/600x400");
    moviePhoto.setAttribute("alt", `No photo to ${_movieTitle}`);
  }

  moviePhoto.classList.add("imgmovie");

  myArticle.classList.add("articlemovie");
  myArticle.appendChild(movieTitle);
  myArticle.appendChild(movieYear);
  myArticle.appendChild(moviePhoto);

  return myArticle;
};

async function fullFillMovies() {
  //clear div
  deleteMovies();
  const genre = document.querySelector("#moviecategory").value;

  const movies = await getMovies(genre);
  if (movies != null) {
    movies.sort((a, b) => a.year - b.year);

    movies.map((x) => {
      // console.log(         "fullFillMovies:" + x.title + " " + x.year + " " + x.imageUrl);
      //":"Knees Burnin","year":2023,"imageUrl":"none"}
      console.log(getArticle(x.title, x.year, x.imageUrl));
      moviesDiv.appendChild(getArticle(x.title, x.year, x.imageUrl));
    });
  }
}

//export default getMovies;
export default fullFillMovies;
