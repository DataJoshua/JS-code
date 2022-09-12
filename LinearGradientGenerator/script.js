let btn = document.querySelector("#btn")
let text= document.querySelector("#linear")
let frame= document.querySelector(".linear-gradient-container")
let btnCopy = document.querySelector("#btn-copy")
let message = document.querySelector(".message")

const generateRandonNum = ()=>{
    return parseInt(Math.random() * 255)
}


const randomGradient = ()=>{

    let direction = parseInt(Math.random() * 365)
    let n1 = generateRandonNum()
    let n2 = generateRandonNum()
    let n3 = generateRandonNum()
    let n4 = generateRandonNum()
    let n5 = generateRandonNum()
    let n6 = generateRandonNum()

   

    let linearGradient = frame.style.background =  `linear-gradient(${direction}deg, rgba(${n1},${n2},${n3}), rgba(${n4},${n5},${n6}))`
    
    text.textContent = linearGradient

    return linearGradient
}



let d = randomGradient()

const copyToClipboard = ()=>{
    navigator.clipboard.writeText(d).then((res)=>{
        message.textContent = "Copied!"
        setTimeout(()=>{
            message.textContent = ""
        }, 1000)
    
    })
}

btn.addEventListener("click", randomGradient)


btnCopy.addEventListener("click", copyToClipboard)
