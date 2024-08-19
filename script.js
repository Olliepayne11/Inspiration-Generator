const textBox = document.querySelector("#text-box-input");
const clickButton = document.querySelector("#actual-button");

const messages = ["Spread love everywhere you go.", 
    "Extraordinary things are always hiding in places people never think to look.",
    "Don't waste a minute not being happy",
    "It is never too late to be what might have been",
    "Nothing is impossible.",
    "Attitude is a little thing that makes a big difference"];

function changeText() {
    
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum === 0) {
        textBox.innerHTML = messages[0];
    }
    else if (randomNum === 1) {
        textBox.innerHTML = messages[1];
    }
    else if (randomNum === 2) {
        textBox.innerHTML = messages[2];
    }
    else if (randomNum === 3) {
        textBox.innerHTML = messages[3];
    }
    else if (randomNum === 4) {
        textBox.innerHTML = messages[4];
    }
    else if (randomNum === 5) {
        textBox.innerHTML = messages[5];
    }
}