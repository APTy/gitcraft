// sc.js

var socket = io('http://gitcraft.herokuapp.com');
socket.on('pull', function (data) {
  playRandom();
});

var soundFile = document.createElement("audio");
soundFile.src = 'audio/sc-marine.mp3';
document.body.appendChild(soundFile);

// var times = [.01, 4.5, 6, 9, 12, 14, 16, 19, 21, 24, 27, 31, 34, 37, 42, 46, 50, 53, 58];
// playSection(times[times.length - 2], times[times.length - 1]);
var times = [.01, 4.5, 6, 9, 12, 14, 16, 19, 21, 24, 27, 31, 34, 37];

function playSection(start, end) {
  soundFile.currentTime = start;
  soundFile.play();
  setTimeout(function() {
    soundFile.pause();
  }, (end-start)*1000);
}

function playRandom() {
  var rnd = Math.floor(Math.random() * (times.length - 1));
  playSection(times[rnd], times[rnd+1]);
}
