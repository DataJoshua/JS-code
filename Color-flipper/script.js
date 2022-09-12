let color = document.querySelector(".color")

let btn = document.getElementById("btn")

let colorArray = ["#ccc", "green", "#f1f45", "red", "violet"]



const changeColor = (actualColor)=>{

    color.textContent = actualColor
    document.body.style = "background-color: " + actualColor
    
}

changeColor( colorArray[0])

btn.addEventListener("click", ()=>{

  let randonumber = parseInt(Math.random() * colorArray.length)
  console.log(randonumber);

    changeColor(colorArray[randonumber])
    
        
})

