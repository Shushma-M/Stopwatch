window.onload = function (){
var seconds = 00;
var tens = 00;
var appendSec=document.querySelector("#sec");
var appendTens=document.querySelector("#tens");
var startButton=document.querySelector("#start");
var stopButton=document.querySelector("#stop");
var resetButton=document.querySelector("#reset");
var Interval;

startButton.onclick=function(){
    clearInterval(Interval);
    Interval=setInterval(startTimer, 10);
}
stopButton.onclick=function(){
    clearInterval(Interval);
}
resetButton.onclick=function(){
    clearInterval(Interval);
    tens="00";
    seconds="00";
    appendSec.innerHTML=seconds;
    appendTens.innerHTML=tens;
}
function startTimer(){
    tens++;
    if(tens < 9){
        appendTens.innerHTML="0"+tens;
    }
    if(tens > 9){
        appendTens.innerHTML=tens;
    }
    if(tens > 99){
        console.log("seconds");
        seconds++;
        appendSec.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+0;
    }
    if(seconds>9){
        appendSec.innerHTML=seconds;
    }
}
}