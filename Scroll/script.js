







//date 

let date = new Date().getFullYear()
console.log(date);

let prueba = document.querySelector("#services")

let banner = document.querySelector(".banner")
let nav = document.querySelector(".nav-container")
let text = document.querySelector(".text")
let header = document.querySelector("header")



// scroll behaviour

window.addEventListener("scroll",()=>{
 
    let distance = text.getBoundingClientRect().top


    if(this.scrollY >= distance){
        text.children[0].style.letterSpacing  = ".23rem"
        console.log("spaced");
    }

   
    if(this.scrollY >= header.getBoundingClientRect().height){
        header.classList.remove("header-fixed")
        header.classList.add("header-sticky")    
    }

    if(this.scrollY <= 10 ){
        header.classList.remove("header-sticky")
        header.classList.add("header-fixed") 
    }

    
})



let toggleNav = document.querySelector(".toggle");
let linksResponsive = document.querySelector(".links-responsive")

toggleNav.addEventListener("click", ()=>{
    linksResponsive.classList.toggle("links-responsive-active")
})


