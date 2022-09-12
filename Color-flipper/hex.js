let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let color = document.querySelector(".color")

let btn = document.getElementById("btn")

document.body.style.backgroundColor = "#f1f2f8"
color.textContent = "#f1f2f8"

btn.addEventListener("click", ()=>{

    let code = "#"
    for(let i = 0; i<6; i++){
        code += hex[Math.floor(Math.random() * hex.length)]
    }

    color.textContent = code
    document.body.style.backgroundColor = code

})


let message = document.querySelector(".message")

function copyText(){
    navigator.clipboard.writeText(color.textContent)
    message.textContent = "copied to clipboard!"
    setTimeout(()=>{
        
        message.textContent = " "
        
    }, 3000)
}
