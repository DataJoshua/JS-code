
// * make a funciton that converst the roman numbers to integer numbers

function FromRomanToInt(s){
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result = 0
    let current, previous = 0

    s.split("").reverse().map((val)=>{
        current = values[val]
        if(current > previous){
            result += current
        }
        else{
            result -= current
        }
        previous = current
    })
    return result
}

console.log(FromRomanToInt("MCMXCIV"));



const intIntoRoman = (number)=>{
  const values = {
        "1":"I",
        "5":"V",
        "10":"X",
        "50":"L",
        "100": "C",
        "500": "D",
        "1000":"M"
    }

    let newNum = number + ""
    let current
    for(value of newNum.split("").reverse()){

    }
}


console.log(intIntoRoman(100));