/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement =document.querySelector("#temples"); 
const templeList =[]; 
 

  console.log(templesElement);
  console.log(templeList);
/* async displayTemples Function */

 const displayTemples =(temple) =>{

    console.log(`temple.length=${temple.length}`);

    temple.map( (element) => {
            const myArticle = document.createElement('article');
            const templeName = document.createElement('h3');
            const templePhoto = document.createElement('img');
            templeName.innerText= element.templeName;
         
            templePhoto.setAttribute("src", element.imageUrl);
            templePhoto.setAttribute('alt', `Photo of temple of ${element.templeName}`);

            
            myArticle.appendChild(templeName);
            myArticle.appendChild(templePhoto);
            templesElement.appendChild(myArticle);

            // console.log(`templeName:${element.templeName}`);
    });

 }




 const process_received=(array)=>{
    array.map( (x)=>{

        templeList.push(x);
        //console.log( templeList.length );
       //   console.log('1.2');

    }   )
    // console.log( JSON.stringify(response) );
    

 }//-------------------

/* async getTemples Function using fetch()*/
const  getTemples = async() => {
    //templeList.pop = [];
    console.log('1');
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    const data = await response.json();

    process_received(data);
 
            console.log('2');
            console.log(`templeList.length=${templeList.length}`);
            
    displayTemples(templeList);
    console.log('3');

}

/* reset Function */

const  reset = () =>{
    console.log('Start reset');
    //templesElement

    while (templesElement.firstChild) {
         console.log( 'Eliminate element:' );
        templesElement.removeChild(templesElement.firstChild);
    }
  
    //console.log(templesElement);

}//-------------------


/* sortBy Function */
const sortBy=(myList)=>{
  console.log('Start sortBy');
    reset();

    
    const selected = document.querySelector('#sortBy').value;
    switch(selected){
      case 'utah':{// start Utah

        const filtered = myList.filter( (value)=>{
          console.log( 'value.location:' + value.location.toLowerCase().includes(selected));
          return  value.location.toLowerCase().includes(selected);
          //location

        }  )
    
      
        displayTemples(filtered); 
    

        break;
      }
      case 'notutah':{


        console.log( ' filtrar nonutah:' );
        const filtered = myList.filter( (value)=>{
         
         
          console.log( 'value.location:' +    value.location.toLowerCase().includes('utah') );
         
         
          return  ! (value.location.toLowerCase().includes('utah'));
          //location

        }  )
    
      
        displayTemples(filtered); 
        break;
      }
      case 'older':{


        console.log( ' filtrar older:' );
        console.log( myList);
       



        const filtered = myList.filter( (value)=>{
         
         const dateDedicate =  new Date(  value.dedicated );

         const date1950 =  new Date(1950, 0, 1);

         console.log( dateDedicate ) ;
         console.log( date1950 ) ;
         
         // const yearDedicated = Number( value.dedicated.split(',')[0]);
          if(   dateDedicate <date1950){  
              return    (value.location );
          }
          
        
          //location

        }  )
    
      
        displayTemples(filtered); 
        break;
      }
      case 'all':{
        displayTemples(myList); 
        
        break;
      }
    }

  
    console.log('selected:'+ selected);

}//

 
 getTemples();
   //reset();
 

 //  sortBy();
 // tmp_async(); 

 
/* Event Listener */
const mysort= document.querySelector('#sortBy');
console.log('mysort');
console.log(mysort);
document.querySelector('#sortBy').addEventListener('change', ()=>{
    sortBy(templeList);
});