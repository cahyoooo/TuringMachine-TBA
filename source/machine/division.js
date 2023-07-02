let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function execute() {
  executeClear();

  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  machine.childNodes[1].className += " moving";
  tm = 2;
  state = 0;

  if (input2.value > 0) {
    for (i = 0; i < input2.value; i++) {
      tape.push(new Cell("0"));
    }
  }

  tape.push(new Cell("1"));

  if (input1.value > 0) {
    for (i = 0; i < input1.value; i++) {
      tape.push(new Cell("0"));
    }
  }
  tape.push(new Cell("1"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
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
        move("B", "R", 1);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 4);
      }
      console.log("state 0");
    } else if (state == 1) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 1);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 2);
      }
      console.log("state 1");
    } else if (state == 2) {
      if (tape[tm].symbol == "0") {
        move("X", "L", 3);
      } else if (tape[tm].symbol == "1") {
        move("B", "L", 6);
      } else if (tape[tm].symbol == "X") {
        move("X", "R", 2);
      } 
      console.log("state 2");
    } else if (state == 3) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 3);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 3);
      } else if (tape[tm].symbol == "X") {
        move("X", "L", 3);
      } else if (tape[tm].symbol == "B") {
        move("0", "R", 0);
      }
      console.log("state 3");
    } else if (state == 4) {
      if (tape[tm].symbol == "X") {
        move("X", "R", 4);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 4);
      } else if (tape[tm].symbol == "0") {
        move("0", "R", 4);
      } else if (tape[tm].symbol == "B") {
        move("0", "L", 5);
      }
      console.log("state 4");
    } else if (state == 5) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 5);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 5);
      } else if (tape[tm].symbol == "X") {
        move("X", "L", 5);
      } else if (tape[tm].symbol == "B") {
        move("B", "R", 0);
      }
      console.log("state 5");
    } else if (state == 6) {
      if (tape[tm].symbol == "B") {
        move("B", "R", 7);
      } else if (tape[tm].symbol == "0") {
        move("X", "L", 6);
      } else if (tape[tm].symbol == "1") {
        move("X", "L", 6);
      } else if (tape[tm].symbol == "X") {
        move("X", "L", 6);
      }
      console.log("state 6");
    } else if (state == 7) {
      if (tape[tm].symbol == "B") {
        move("B", "R", 7);
      } else if (tape[tm].symbol == "0") {
        move("0", "L", "final");
      }
      console.log("state 7");
    } else if (tape[tm].symbol == "0") {
      move("0", "L", "final");
    } else if (state == "final") {
      finalState = true;
    }
  }
}
