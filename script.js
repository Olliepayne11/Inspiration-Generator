const messages = ['Learning is never done without error, and defeat.', 
    'Your self-worth is determined by you.', 
    'Nothing is impossible.', 
    'Attitude is a little thing that makes a big difference.'];

let randomNum = Math.floor(Math.random() * 4);

let textBox = document.getElementById('text-box-input');

function randomMessage(messages) {

if (randomNum === 0) {
    return textBox.value = messages[0];
}
else if (randomNum === 1) {
    return textBox.value = messages[1];
}
else if (randomNum === 2) {
    return textBox.value = messages[2];
}
else if (randomNum === 3) {
    return textBox.value = messages[3];
}

};

randomMessage(messages);