var vid = document.getElementById("myvideo");
var btn = document.getElementById("playpause");
function myFunction() {
    if (vid.paused) {
        vid.play();
        btn.innerHTML="Pause";
    }
    else{
        vid.pause();
        btn.innerHTML="Play";
    }
}