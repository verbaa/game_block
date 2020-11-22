//generate size blocks
let i = 0
const square = document.getElementsByClassName('area')[0];
const count = document.getElementsByClassName('count')[0];
const hue = () => {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}
const size = (max = 200, min = 50, unit = px) => {
    return Math.floor(Math.random() * (max - min)) + min +unit;
}

const voices = window.speechSynthesis.getVoices();

const speak = (text) => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = text
    msg.voice = voices[5]
    window.speechSynthesis.speak(msg)
}

//generate blocks

const randomize = (el) => {
    Object.assign(
        el
            .style,{
            background: hue(),
            height: size(100,20, 'px'),
            width: size(100,20, 'px'),
            marginTop: size(-25,25, 'vh'),
            marginLeft: size(-25,25, 'vw'),
        }
    )
    count.innerText = i++


}

square.addEventListener('click', function(){
    randomize(square)
    window.speechSynthesis.cancel()
    speak(this.innerText)
})



    display = document.querySelector('#time');
const start = document.getElementsByClassName('game__start')[0];

//start game

start.addEventListener('click', function(){
    if (start.textContent === "start") {
        start.textContent = "stop";
        square.style.display = "block"
        randomize(square)
        intervalId = setInterval(startTimer, 1000);

    } else {
        start.textContent = "start";
        square.style.display = "none"
        count.innerText = 0
        i = 0;
        if (intervalId)
            clearInterval(intervalId);
        totalSeconds = 0;
        document.getElementById("seconds").innerHTML = '0';
    }

})
const score = document.querySelector('.game__score');
let countScore = document.querySelector('.count-score');


// Timer

    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;

    let intervalId = null;

    function startTimer() {
        --totalSeconds;
        hour = Math.floor(totalSeconds /3600);
        minute = Math.floor((totalSeconds - hour*3600)/60);
        seconds = totalSeconds - (hour*3600 + minute*60);
        document.getElementById("seconds").innerHTML = seconds;
        if (seconds === 0){
            if (intervalId)
                clearInterval(intervalId);
            score.style.display = 'block'
            countScore.textContent =  count.textContent
        }
    }


