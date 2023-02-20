// Video
let clip = document.querySelector(".pianoVideo")

// Play on hover
clip.addEventListener("mouseover", function (e) {
    clip.play();
})

// Stop playing on mouse out
function mouseOutPause(){
    clip.pause();
}
clip.addEventListener("mouseout", mouseOutPause)

// Keep playing if the video is clicked even if the mouse is out
clip.addEventListener("click", function (e) {
    clip.play();
    clip.removeEventListener("mouseout", mouseOutPause)
})