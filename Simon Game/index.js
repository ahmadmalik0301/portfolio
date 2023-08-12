

var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
keyBoard = false;

$(".btn").click(function (event) {
    var userSelectedColor = event.target.id;
    userClickedPattern.push(userSelectedColor);
    blinkNSound(userSelectedColor);

    checkAns(userClickedPattern.length - 1);

})
$("*").keydown(function () {
    if (!keyBoard) {
        nextSequence();
        keyBoard = true;
    }
    else {

    }

});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").html("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    blinkNSound(randomChosenColor);

}
function startOver() {
    level = 0;
    gamePattern = [];
    keyBoard = false;
}
function blinkNSound(id) {
    $("#" + id).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds/" + id + ".mp3");
    audio.play();
    $("#" + id).addClass("pressed");
    setTimeout(() => {
        $("#" + id).removeClass("pressed");
    }, 100);

}
function checkAns(levelNum) {
    if (gamePattern[levelNum] === userClickedPattern[levelNum]) {
        console.log("win");
        if ( userClickedPattern.length === gamePattern.length ) {


            setTimeout(() => {
                nextSequence();
            }, 1000);      
        }
    }
    else {
        
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over,Press Any key To Restart");  
        startOver();
    }
}