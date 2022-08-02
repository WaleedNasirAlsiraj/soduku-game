var delay = 1000*15;

setTimeout(function() {
    let music = document.getElementById("music");
    let image = document.getElementById("hadi");
    music.src = "/never-gonna-give-you-up-official-music-video.mp3" ;
    image.src = "/icons8-laugh-64.png";
    document.getElementById("text").innerHTML = "You Got RickRolled !!"
}, delay);

setTimeout(function playVideo() {
    let video = document.getElementById("play");
    video.src="/prank.mp4"
}, delay + 3000);
setTimeout(function() {
    let video = document.getElementById("play2");
    video.muted
    video.src="/prank2.mp4"
}, delay + 6000);