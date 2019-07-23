label = document.getElementById('label');
scorelabel = document.getElementById('score');
button = document.getElementById('button');
input = document.getElementById("input");

/*
// TODO:
  score ekle
  2. aşamada input gizlensin
  bugları çöz

  */


function buttonmouseover() {
  button.innerHTML = "ilerlemek için tıkla";

}

function buttononmouseleave() {
  button.innerHTML = "sonraki";
}
function random() {
  return Math.floor((Math.random()*10)+1);
}

var stage = 2;
var score = 0;

function next() {

  if (window.stage == 1) {
    window.scorelabel.innerHTML = ("score: " + window.score);
    window.label.innerHTML = ("1 İle 10 Arasından Bi Sayı Tuttum Tahmin Et");
    window.stage = 2;
  }

  else if (window.stage == 2) {
    var guess = window.input.value;
    var random = window.random();
    if (guess == random) {
      window.label.innerHTML = "AFFERİN LEN";
    }
    else {
      window.label.innerHTML = ":( cevap şuydu:"+ random;

    }

    window.stage = 1;
  }
}
