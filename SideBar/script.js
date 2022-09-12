let sideBar = document.querySelector(".sidebar")
let closeSideBar = document.querySelector("#sidebar-btn")
let sideBarOpen = document.querySelector("#sidebar-toggle")

closeSideBar.addEventListener("click", ()=>{
    sideBar.classList.remove("sidebar-active")
})

sideBarOpen.addEventListener("click", ()=>{
   if(sideBar.classList.contains("sidebar-active")){

        sideBar.classList.remove("sidebar-active")
   }
   else{
    sideBar.classList.add("sidebar-active")
   }

})

