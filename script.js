const image = document.getElementById(mechan);
const sound = new Audio ("sounds/paf.mp3");
image.addEventListener("click",function(){
    sound.currentTime = 0;
    sound.play();
});