document.addEventListener("keydown", function(e){
    keySound(e);
    keyAnimation(e);
});

function keySound(thisKey){
    let audio;
    switch(thisKey.key){
        case("w"):
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case("a"):
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case("s"):
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case("d"):
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case("j"):
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case("k"):
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case("l"):
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(thisKey.key);
            break;
    }
}

function keyAnimation(thisKey){
    let myBtn = document.querySelector("."+thisKey.key);
    myBtn.classList.toggle("pressed");
    setTimeout(()=>myBtn.classList.toggle("pressed"),250);
}