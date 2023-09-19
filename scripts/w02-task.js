/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName ="Amauri Siqueira";
//let currentYear = new Date().getFullYear();

let profilePicture ="images/photo.jpg";
/* Step 3 - Element Variables */


const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement  = document.getElementById('year');
const imageElement = document.getElementById('image');

/* Step 4 - Adding Content */


nameElement.innerHTML =  `<strong>${fullName}</strong>`;
year.textContent=currentYear;
console.log(profilePicture);
console.log(imageElement);

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);
 


/* Step 5 - Array */

let myFavoriteFood = ['Pasta','Pizza','Lasagna','Steak'];
    
foodElement.innerHTML += `${myFavoriteFood}`;

    let anotherFavoriteFood='Salad';
    myFavoriteFood.push(anotherFavoriteFood);

 foodElement.innerHTML += `<br>${myFavoriteFood}`;

    myFavoriteFood.shift();
    myFavoriteFood.push('Rice');

foodElement.innerHTML += `<br>${myFavoriteFood}`;
    myFavoriteFood.pop();
foodElement.innerHTML += `<br>${myFavoriteFood}`;






