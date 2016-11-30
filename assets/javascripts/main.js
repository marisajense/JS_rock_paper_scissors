var choices = ['Rock', 'Paper', 'Scissors'];
var userChoice = "";
var computerChoice = "";
var result = "";

function computerChoiceFunction() {
  var index = Math.floor(Math.random() * choices.length)
  computerChoice = choices[index];
  console.log("Computer pick: " + computerChoice);
  putCResult(computerChoice)
}

var userChoice = document.getElementsByClassName("choice");
for(var i = 0; i < userChoice.length; i++) {
  var user = userChoice[i];
  user.addEventListener("click", function() {
    user = this.id;
    userChoice = user;
    // console.log("Your pick: " + userChoice);
    cresults.innerHTML = "Ready....";
    results.innerHTML = "";
    setTimeout(function(){computerChoiceFunction()}, 750);
    setTimeout(function(){compare(userChoice, computerChoice)}, 750);
  });
}

function compare(userChoice, computerChoice) {
  if (userChoice === 'Rock' && computerChoice === 'Rock') {
    result = "Tie!"
    putResult(result);
    sresult.style.color = 'blue';
  }
  else if (userChoice === 'Paper' && computerChoice === 'Paper') {
    result = "Tie!"
    putResult(result);
    sresult.style.color = 'blue';
  }
  else if (userChoice === 'Scissors' && computerChoice === 'Scissors') {
    result = "Tie!"
    putResult(result);
    sresult.style.color = 'blue';
  }
  else if (userChoice === 'Rock' && computerChoice === 'Paper') {
    result = "You Lose!"
    putResult(result);
    sresult.style.color = 'red';
  }
  else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
    result = "You Lose!"
    putResult(result);
    sresult.style.color = 'red';
  }
  else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
    result = "You Lose!"
    putResult(result);
    sresult.style.color = 'red';
  }
  else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
    result = "You Win!"
    putResult(result);
    sresult.style.color = 'green';
  }
  else if (userChoice === 'Paper' && computerChoice === 'Rock') {
    result = "You Win!"
    putResult(result);
    sresult.style.color = 'green';
  }
  else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
    result = "You Win!"
    putResult(result);
    sresult.style.color = 'green';
  }
}

var results = document.getElementById('sresult');
function putResult(result) {
  results.innerHTML = result;
}

var cresults = document.getElementById('compscreen');
function putCResult(result) {
  cresults.innerHTML = "Computer pick: " + result;
}
