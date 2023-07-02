let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function execute() {
  executeClear();

  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  machine.childNodes[1].className += " moving";
  tm = 2;
  state = 0;

  if (input1.value > 0) {
    for (i = 0; i < input1.value; i++) {
      tape.push(new Cell("0"));
    }
  }

  tape.push(new Cell("1"));

  if (input2.value > 0) {
    for (i = 0; i < input2.value; i++) {
      tape.push(new Cell("0"));
    }
  }

  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
}

function executeNextMove() {
  if (tape[0]) {
    let cell = document.getElementsByClassName("moving");
    for (i = 0; i < cell.length; i++) {
      cell[i].className = cell[i].className.replace(" moving", "");
    }

    if (state == 0) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 1);
      }
    } else if (state == 1) {
      if (tape[tm].symbol == "1") {
        move("1", "R", 1);
      } else if (tape[tm].symbol == "0") {
        move("0", "R", 1);
      } else if (tape[tm].symbol == "B") {
        move("B", "L", 2);
      }
    } else if (state == 2) {
      if (tape[tm].symbol == "0") {
        move("B", "L", "final");
      }
    } else if (state == "final") {
      if (tape[tm].symbol == "1") {
        move("0", "L", "final");
        finalState = true;
      } else if (tape[tm].symbol == "0") {
        move("0", "L", "final");
        finalState = true;
      }
    }
  }
}
