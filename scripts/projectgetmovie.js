export default async function getMovies(genre) {


  console.log(`getMovies  a:${genre}`);
  const url = `https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?genre=${genre}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c5e7956bbemsh3877ea112745929p10fc9ejsnfee759ad036a",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  console.log("b");
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("response:" + response);
      const myJSON = await response.json();

      //console.log("myJSON: " + JSON.stringify(myJSON));
      if (Array.isArray(myJSON.results)) {
        const movieData = myJSON.results.map((item) => {
          const title = item.titleText.text;
          const year = item.releaseYear.year;
          const imageUrl =
            item.primaryImage == null ? "none" : item.primaryImage.url;
          return { title, year, imageUrl };
        });

        // console.log("movieData: " + movieData);
        // console.log("movieData: " + JSON.stringify(movieData));
        return movieData;
      } else {

        //console.log("myJSON no es un array.");
        return null;
      }
    }
  } catch (error) {
    //console.error(error);
    return null;
  }
  return null; //console.log("getMovies z");
} //---------------

 
