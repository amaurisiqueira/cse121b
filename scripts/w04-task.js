/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = { name:"Amauri Siqueira",
                photo:"images/photo.jpg",
                favoriteFoods:['Pasta','Pizza','Lasagna','Steak'],
                hobbies:['Whaching movie','cooking'],
                placesLived:[],
    };


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place:"Puente Alto", length:'1 month'});
myProfile.placesLived.push({place:"Independencia", length:'1 year'});
myProfile.placesLived.push({place:"San Bernardo", length:'12 year'});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent= myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', `Photo of ${myProfile.name}`);


/* Favorite Foods List*/
const favoriteFoodsList = document.querySelector('#favorite-foods'); // Obtén el elemento con el id "favorite-foods"

myProfile.favoriteFoods.forEach((food) => { 
  const listItem = document.createElement('li'); 
  listItem.textContent = food; 
  favoriteFoodsList.appendChild(listItem); 
});

  
     ;
/* Hobbies List */
const hobbies = document.querySelector('#hobbies');
myProfile.hobbies.map((myhobby)=>{
  const myelement = document.createElement('li');
  myelement.textContent=myhobby;
  hobbies.appendChild(  myelement);
}); 



/* Places Lived DataList */

const placesLived = document.querySelector('#places-lived');
const myPlaces = myProfile.placesLived;
myPlaces.map((place) => {

  const myElementPlace= document.createElement('dt');
  myElementPlace.textContent=place.place;

  const myElementlength= document.createElement('dd');
  myElementlength.textContent=place.length;

  placesLived.appendChild(myElementPlace);
  placesLived.appendChild(myElementlength);
 
});

