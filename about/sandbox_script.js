var leftplayer = document.getElementById('duel1');
var leftprint = document.getElementById('leftpos');
var rightplayer = document.getElementById('duel2');
var rightprint = document.getElementById('rightpos');
var leftpos = 10;
var rightpos = 70;
over = 0;

function plus(n) {
  if (over) return;
  leftpos += n;
  if (leftpos < 0) leftpos = 0;
  if (leftpos > rightpos) leftpos = rightpos;

  leftplayer.style.setProperty("left", leftpos + "%");
  leftprint.innerHTML = leftpos;
  if (leftpos == rightpos) {
    document.getElementById('consigne').innerHTML = "You won !";
    over = 1;
    rightplayer.style.transform = 'rotate(' + 90 + 'deg)';
    rightplayer.style.setProperty("top", 55 + "%");
    return;
  }

  //AI
  reponse = 3;
  if ((rightpos - leftpos) % 4 != 0) {
    if (n < 0) reponse = 1;
    else reponse = 4 - n;
  }
  else {
    reponse = 1 + Math.floor(Math.random() * Math.floor(3));
  }

  //End of turn
  rightpos -= reponse;
  if (rightpos > 100) rightpos = 100;
  if (rightpos < leftpos) rightpos = leftpos;
  if (leftpos == rightpos) {
    document.getElementById('consigne').innerHTML = "I won, sorry !";
    leftplayer.style.transform = 'rotate(' + 90 + 'deg) scale(1, -1)';
    leftplayer.style.setProperty("top", 55 + "%");
    over = 1;
  }
  rightplayer.style.setProperty("left", rightpos - 5 + "%");
  rightprint.innerHTML = rightpos;
  document.getElementById('mymove').innerHTML = "My latest move : " + reponse;
}

const snail0 = document.getElementById("snail");
var snailx = parseInt(snail0.style.left);
var count = 1;

function snail() {
  snailx = snailx + 10 / count;
  console.log(snailx)
  count++;
  snail0.style.setProperty("left", snailx + "%");
  if (snailx > 60) {
    snail0.style.transform = 'rotate(' + 180 + 'deg)';
    count = -count;
  }

}

var duringBg = "rgba(50,120,155,1)";
var afterBg = "rgba(150,220,255,1)";

function playTruc(n) {
  var audio;
  if (n == 0) audio = new Audio("../sound/door.mp3");
  if (n == 1) audio = new Audio("../sound/bell0.mp3");
  if (n == 2) audio = new Audio("../sound/bowl.mp3");
  if (n == 3) audio = new Audio("../sound/wink.mp3");
  if (n == 4) audio = new Audio("../sound/slight.mp3");
  if (n == 5) audio = new Audio("../sound/idea.mp3");
  if (n == 6) audio = new Audio("../sound/bell1.mp3");
  if (n == 7) audio = new Audio("../sound/ding.mp3");
  if (n == 8) audio = new Audio("../sound/metal.mp3");

  if (n == 0) var obj = document.getElementById('audio0');
  if (n == 1) var obj = document.getElementById('audio1');
  if (n == 2) var obj = document.getElementById('audio2');
  if (n == 3) var obj = document.getElementById('audio3');
  if (n == 4) var obj = document.getElementById('audio4');
  if (n == 5) var obj = document.getElementById('audio5');
  if (n == 6) var obj = document.getElementById('audio6');
  if (n == 7) var obj = document.getElementById('audio7');
  if (n == 8) var obj = document.getElementById('audio8');

  obj.style.background = duringBg;
  audio.play();
  setTimeout(function () {
    obj.style.background = afterBg;
  }, 400);

}
