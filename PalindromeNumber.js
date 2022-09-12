const palindrome = (num)=>{
    return num.toString().split("").reverse().join("")
}

console.log(palindrome(-12))