/* LESSON 3 - Programming Tasks */
//var currentYear = new Date().getFullYear();
/*
document.querySelector('#year').textContent= currentYear;
console.log(`after currentYea:${currentYear}`);
*/
console.log(`currentYea:${currentYear}`);
/* FUNCTIONS */
/* Function Definition - Add Numbers */
const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13];
 
const add= (number1,number2) =>{
      return number1+number2;
}

/* Function Expression - Subtract Numbers */
const subtract =(number1,number2)=>{
        return number1-number2;
}

const addNumbers = () =>{
    //  console.log("addNumbers");
    // console.log(`document.getElementById("add1"):${document.getElementById("add1").value}`);
    const number1=  Number( document.getElementById("add1").value);
    const number2=  Number( document.getElementById("add2").value);
    console.log(`number1:${number1}`);
    console.log(`number2:${number2}`);
    console.log(`add(number1,number2):${add(number1,number2)}`);
    //   document.getElementById("sum").value = `${add(number1,number2)}`;
    document.querySelector("#sum").value = `${add(number1,number2)}`;
    
    numbers
}
document.getElementById("addNumbers").addEventListener('click',addNumbers);


const subNumbers = () =>{
    const value1=   Number( document.querySelector("#subtract1").value);
    const value2=  Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value= subtract(value1,value2);
}
document.querySelector("#subtractNumbers").addEventListener('click',subNumbers);
  


/* Arrow Function - Multiply Numbers */
const myMultiply=(fact1 , fact2) => fact1*fact2;


const onMultiply = () =>{
    const factor1 = Number( document.querySelector('#factor1').value );
    const factor2 = Number( document.querySelector('#factor2').value );
    document.querySelector('#product').value= myMultiply(factor1,factor2) ;
}
document.querySelector('#multiplyNumbers').addEventListener('click',onMultiply); 
 
/* Open Function Use - Divide Numbers */
const myDivide=(dividend, divisor)=>{
        let mydivisor=1;
        if(divisor>0) mydivisor=divisor;
        return          dividend/mydivisor;
}
const onDividend =() => {

    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number (document.querySelector('#divisor').value);
    document.getElementById('quotient').value =   myDivide(dividend,divisor);
    console.log( myDivide(dividend,divisor));
 
}
document.querySelector('#divideNumbers').addEventListener('click',onDividend);

/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
document.querySelector('#array').innerHTML = numbers.map((value)=>{
    return value;
});
console.log(  JSON.stringify(numbers));
/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbers.filter((value)=>{
    if((value%2)>0) return value;
});
/* Output Evens Only Array */
document.getElementById('evens').innerHTML=  numbers.filter((myvalue)=>{if( (myvalue%2)==0)  return myvalue;});
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbers.reduce( (val,sumatory) =>{ return val+sumatory;});
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbers.map((val)=>{ return val*2;});

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerHTML = numbers.map((value)=>value*2).reduce( (val,suma)=>val + suma);