// reduce function is used to display the current and previous value
// of the array and manipulate data 

const array1  = [1,2,3,4,4]

// For example you need to find the sum of all the values of the array you can use REDUCE

let result = array1.reduce((previousVal, currentVal)=>{
    return previousVal + currentVal
    
});

// you also can write like this 
let result2 = array1.reduce((prevVal, currentVal) => prevVal + currentVal, 0)
// in this case we put 0 as default value in the case the array contain another kind of characters like strings



// syntax is array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

console.log(result)