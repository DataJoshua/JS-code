console.log("hola mundo");

// ternary Conditionals in Javascript
// They are used to write less code 
// use instead of If, Else, Switch ect statements

const getFee = (isMember)=>{
    return (isMember ? "2.00USD" : "10USD")
}

// Here ? symbol is acting like and if statement, and : like and else
// we just basically saying that if the variable isMember is True then return a String "2.00USD" or else return "10USD"


console.log(getFee(true))
console.log(getFee(false))
console.log(getFee(null))

// In the case the boolean argument gets and null value it will take that as a False statement

// IMPORTANT if you put wathever value that is not a Null statement, it will consider it as a True Statement
// For example
console.log(getFee("other value"))
console.log(getFee(12))


// We also can use with comparators 

let num = 6
const a = num > 5 ? "bigger than five" : "smaller than five";

console.log(a);

// As you can see before we also can use ternary Operators to asign value to const of variables in a ease way


// Handle Null values, as you can remember we can consider a null value as a false statement and an object as a True,
// You can see this point in the next example

const greeting = (person)=>{
    const name = person ? person.name : "Stranger";
    return `hello ${name}`
}

console.log(greeting({
    name: "joshua"
}))

console.log(greeting(null));