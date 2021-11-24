

class PlayAudio {
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}

let flute = new PlayAudio("flute", "music/flute.mp3") 
let guitar = new PlayAudio("guitar", "music/guitar.mp3")
let harp = new PlayAudio("harp", "music/harp.mp3")
let saxophone = new PlayAudio("saxophone", "music/saxophone.mp3")

var playF = new Audio(flute.location); 
var playG = new Audio(guitar.location); 
var playH = new Audio(harp.location); 
var playS = new Audio(saxophone.location); 

function loopAudio1(){
    var loop1 = document.getElementById('loop1');
    if (loop1.checked == true){
        playF.loop = true;
    } else {
        playF.loop = false;
    }
}

function loopAudio2(){
    var loop2 = document.getElementById('loop2');
    if (loop2.checked == true){
        playG.loop = true;
    } else {
        playG.loop = false
    }
}

function loopAudio3(){
    var loop3 = document.getElementById('loop3');
    if (loop3.checked == true){
        playH.loop = true;
    } else {
        playH.loop = false
    }
}

function loopAudio4(){
    var loop4 = document.getElementById('loop4');
    if (loop4.checked == true){
        playS.loop = true;
    } else {
        playS.loop = false
    }
}

function sliderChange1(val1) {
    document.getElementById('sliderVal1').innerHTML = val1;
    playF.volume = val1;
}

function sliderChange2(val2) {
    document.getElementById('sliderVal2').innerHTML = val2;
    playG.volume = val2;
}

function sliderChange3(val3) {
    document.getElementById('sliderVal3').innerHTML = val3;
    playH.volume = val3;
}

function sliderChange4(val4) {
    document.getElementById('sliderVal4').innerHTML = val4;
    playS.volume = val4;
}


function playFlute(){
    playF.play();
}

function playGuitar(){
    playG.play();
}

function playHarp(){
    playH.play();
}

function playSaxophone(){
    playS.play();
}

function playAll(){
    playF.play();
    playG.play();
    playH.play();
    playS.play();
}

//audio.oncanplaythrough = function(){
 // audio.play();
//}

//audio.onended = function(){
   
//}
