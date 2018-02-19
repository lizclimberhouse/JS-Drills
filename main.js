var total

function getInfo() {
  var mathChoice = this.id;
  var name = document.getElementById('myName').value;
  var numFirst = parseInt(document.getElementById('num1').value);
  var numSecond = parseInt(document.getElementById('num2').value);

  nameOut.innerHTML = name;
  doMath(numFirst, mathChoice, numSecond)
}

function doMath(numFirst, mathChoice, numSecond) {
  switch (mathChoice) {
    case 'add':
    total = numFirst + numSecond;
    break;
    case 'minus':
    total = numFirst - numSecond;
    break;
    case 'times':
    total = numFirst * numSecond;
    break;
    case 'divide':
    total = numFirst / numSecond;
    break;
  }
  userTotal.innerHTML = total;
  numFirst = 0;
  numSecond = 0;
}

function clearList() {
  name = "";
  nameOut.innerHTML = name;
  total = "";
  userTotal.innerHTML = total;
  document.getElementById('myName').value = "";
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', getInfo)
  } catch(err) {
    //First load
  }
}