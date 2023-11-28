const audio = document.getElementById("backgroundmusic");
function playaudio() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();}
}
document.getElementById("clickplay").addEventListener("click", playaudio);