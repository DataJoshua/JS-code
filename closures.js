
// this example work just for a counter function

let count = 0 

// we make a function to increment the value of the counter

const counterExample = ()=>{
    count++;
    return count;
}
 
console.log(counterExample()) // 1
console.log(counterExample()) // 2
console.log(counterExample()) // 3

// in this case to work we have to make that the count variable is out the funciton to the counter to work

// instead of doing this we can make the counter in a clousure function

// this type of functions returns another function

const createCounter = ()=>{
    let count2 = 0
    return ()=>{
        return count2++
    }
}

let counter = createCounter()

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2
