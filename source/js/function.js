let tm;
let state;
let tape = [];
const machine = document.getElementById("machine");
const controller = document.getElementsByClassName("controller");

function executeClear() {
  machine.innerHTML = "";
  tape = [];
}

function move(newSymbol, arah, newState, isPushing) {
  if (isPushing) {
    tape.push(new Cell("B"));
  }

  tape[tm].changeTo(newSymbol);
  machine.childNodes[tm].textContent = newSymbol;

  machine.childNodes[tm].className += " moving";
  machine.childNodes[tm + 1].scrollIntoView();

  state = newState;
  if (arah == "R") {
    tm++;
  } else if (arah == "L") {
    tm--;
  } else if (arah == "S") {
    tm = tm;
  } else {
    console.log("Error: arah is not R or L");
  }
}

function finalState() {
  if (state == "final") {
    return true;
  } else {
    return false;
  }
}
