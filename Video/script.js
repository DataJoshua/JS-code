btnPlay = document.querySelector(".btn-play")
btnPause = document.querySelector(".btn-pause")
video = document.querySelector(".video-container")
loader = document.querySelector(".preloader")

window.addEventListener("load", ()=>{
    loader.style.display = "none"
    console.log("esta cargado");
})

btnPlay.addEventListener("click", ()=>{
    video.play()
})
btnPause.addEventListener("click", ()=>{
    video.pause()
})


