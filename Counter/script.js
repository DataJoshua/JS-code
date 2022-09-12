let count = 0

let btns = document.querySelectorAll(".btn")
let counter = document.querySelector("#count")


btns.forEach(element => {
    element.addEventListener("click", (e)=>{
    
        let c = e.currentTarget.classList // gives us the current element
        
        // classlist gives an array of the classes 

        if(c.contains("increase")){
            count++
        }
        else if(c.contains("decrease")){
            count--
        }
        else{
            count = 0
        }

        counter.style.color = setColor(count)

        counter.textContent = count

    })
});

function setColor(count){
    if(count > 0) return "green"
    if(count < 0) return "red"
    return "black"
}