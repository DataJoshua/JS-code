// * digital n number, calculate the sum of the digits of a number 
// *  until the number is returned on one digit

// example
// input 12   -->  1 + 2 =  3 
// input 456  -->  4 + 5 + 6 =  15   --> 1 + 5 =  6


function digitalRoot(n) {
    
    //define an array of numbers

    let numArray = n.toString().split("")
    
    // verify the lenght
    if(numArray.length > 1){
        let result = 0
        // sum each value and transform to integrer
        numArray.forEach((value) => {
            let num = parseInt(value)
            result += num           
        }); // return a recursive function with the result of the sum
        return digitalRoot(result);
    }
    // in case the number has only one digit then return that number
    return numArray[0]
}


//OMG why did i do all of thiss OMGGGfsjo

//easiest way to solve this problem

function digital_root(n) {
    // this is a mathematical expresion that give us the digital root of a number 
    return (n - 1) % 9 + 1;
}

console.log(digital_root(456))



// -----------------------------------------------------------------------

// * make a sum of the values in an mixed array between integers and Strings


let examplee = ['2', 5 ,"5","12"]


function sumArray(x){
    return x.map(a => +a).reduce((pValue, cValue) => pValue + cValue)
}

// We use map to return a new array of elements but transformed to int

// we use reduce to return the sum of all elements in that array 


console.log(sumArray(examplee));


// * isogram, return true if a word does not repeat a letter


function isIsogram(str){
    let arrayString = str.toLowerCase()
    for(let i = 0; i < arrayString.length; i++){
      
        if(arrayString[i] == arrayString[i+1]){
            return false
        }
       
    }
    return true
   
}

console.log(isIsogram("isograma"));


