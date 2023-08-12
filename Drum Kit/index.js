
function playMusic (char1) {
    switch (char1) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            break;
    }
}
function btnAnimation(char) {
    var pressedBtn = document.querySelector("."+char);
    pressedBtn.classList.add("pressed");
    setTimeout(() => {
        pressedBtn.classList.remove("pressed");
    }, 100);
    
}



for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        playMusic(buttonInnerHtml);
        btnAnimation(buttonInnerHtml);
        
    });
}
document.addEventListener("keydown", function (event) {
    var key1 = event.key;
    playMusic(key1);
    btnAnimation(key1);
})


// var audio1 =  new Audio('./sounds/tom-1.mp3');
// audio1.play();


