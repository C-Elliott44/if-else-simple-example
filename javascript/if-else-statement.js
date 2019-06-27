var pass = 50; // Passing Score
var score = 75; // Current Score
var msg; // Message

// Select message base off relation between variables score and pass
if (score >= pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!'
}

var el = document.getElementById('answer');
el.textContent = msg;
