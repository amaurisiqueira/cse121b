async function getGenres() {
  //myCategoryOfMovies = [];

  console.log("a");
  const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres";
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
    // console.log("response:" + response);
      const myJSON = await response.json();

  //  console.log("myJSON: " + JSON.stringify(myJSON));
      if (Array.isArray(myJSON.results)) {
        const mySelect = document.querySelector("#moviecategory");

        myJSON.results.map((data, index) => {
          if (index > 0) {
            const newOption = document.createElement("option");
            newOption.value = data;  
            newOption.text = data;  

            mySelect.appendChild(newOption);
          }
        });
      } else {
        console.log("myJSON no es un array.");
      }
    }
  } catch (error) {
    console.error(error);
  }
  console.log("z");
} //---------------

export default getGenres;
