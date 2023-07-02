let input1 = document.getElementById("input1");

function execute() {
  executeClear();

  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  machine.childNodes[11].className += " moving";
  tm = 12;
  state = 0;

  if (input1.value > 0) {
    for (i = 0; i < input1.value; i++) {
      tape.push(new Cell("0"));
    }
  }

  if (input2.value > 0) {
    for (i = 0; i < input2.value; i++) {
      tape.push(new Cell("0"));
    }
  }

  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
  tape.push(new Cell("B"));
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
        move("B", "R", 23);
      }
      console.log("state0");
    } else if (state == 1) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 1);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 2);
      }
      console.log("state1");
    } else if (state == 2) {
      if (tape[tm].symbol == "0") {
        move("B", "R", 3);
      } else if (tape[tm].symbol == "B") {
        move("B", "R", 2);
      }
      console.log("state2");
    } else if (state == 3) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 3);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 4);
      }
      console.log("state3");
    } else if (state == 4) {
      if (tape[tm].symbol == "1") {
        move("1", "L", 11);
      } else if (tape[tm].symbol == "B") {
        move("0", "L", 5);
      } else if (tape[tm].symbol == "X") {
        move("X", "R", 4);
      }
      console.log("state4");
    } else if (state == 5) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 5);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 6);
      }
      console.log("state5");
    } else if (state == 6) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 6);
      } else if (tape[tm].symbol == "B") {
        move("B", "R", 2);
      }
      console.log("state6");
    } else if (state == 7) {
      if (tape[tm].symbol == "X") {
        move("X", "R", 7);
      } else if (tape[tm].symbol == "0") {
        move("0", "R", 7);
      } else if (tape[tm].symbol == "1") {
        move("X", "L", 27);
      }
      else if (tape[tm].symbol == "B") {
        move("1", "L", 8);
      }
      console.log("state7");
    } else if (state == 8) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 8);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 9);
      }
      console.log("state8");
    } else if (state == 9) {
      if (tape[tm].symbol == "B") {
        move("0", "L", 9);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 10);
      }
      console.log("state9");
    } else if (state == 10) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 10);
      } else if (tape[tm].symbol == "B") {
        move("B", "R", 0);
      }
      console.log("state10");

    } else if (state == 11) {
      if (tape[tm].symbol == "0") {
        move("B", "R", 12);
      } else if (tape[tm].symbol == "B") {
        move("B", "L", 11);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 15);
      } else if (tape[tm].symbol == "X") {
        move("X", "R", 15);
      }
      console.log("state11");
    } else if (state == 12) {
      if (tape[tm].symbol == "B") {
        move("B", "R", 12);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 13);
      }
      console.log("state12");
    } else if (state == 13) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 13);
      } else if (tape[tm].symbol == "B") {
        move("0", "L", 14);
      }
      console.log("state13");
    } else if (state == 14) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 14);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 11);
      }
      console.log("state14");
    } else if (state == 15) {
      if (tape[tm].symbol == "B") {
        move("0", "R", 15);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 16);
      }
      console.log("state15");
    } else if (state == 16) {
      if (tape[tm].symbol == "X") {
        move("X", "L", 16);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 17);
      } else if (tape[tm].symbol == "0") {
        move("0", "L", 16);
      }
      console.log("state16");
    } else if (state == 17) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 17);
      }
      else if (tape[tm].symbol == "B") {
        move("B", "R", 2);
      }
      console.log("state17");
    } else if (state == 18) {
      if (tape[tm].symbol == "0") {
        move("X", "R", 18);
      } else if (tape[tm].symbol == "X") {
        move("X", "R", 19);
      }
      console.log("state18");
    } else if (state == 19) {
      if (tape[tm].symbol == "B") {
        move("1", "L", 20);
      } else if (tape[tm].symbol == "0") {
        move("0", "R", 19);
      }
      console.log("state19");
    } else if (state == 20) {
      if (tape[tm].symbol == "X") {
        move("X", "L", 20);
      } else if (tape[tm].symbol == "0") {
        move("0", "R", 20);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 20);
      } else if (tape[tm].symbol == "B") {
        move("0", "L", 21);
      }
      console.log("state20");
    } else if (state == 21) {
      if (tape[tm].symbol == "B") {
        move("0", "L", 21);
      } else if (tape[tm].symbol == "1") {
        move("1", "L", 22);
      }
      console.log("state21");
    } else if (state == 22) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 22);
      } else if (tape[tm].symbol == "B") {
        move("B", "R", 0);
      }
      console.log("state22");
    } else if (state == 23) {
      if (tape[tm].symbol == "0") {
        move("B", "R", 23);
      } else if (tape[tm].symbol == "1") {
        move("B", "R", 24);
      }
      console.log("state23");
    } else if (state == 24) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 25);
      } else if (tape[tm].symbol == "1") {
        move("B", "R", 25);
      } else if (tape[tm].symbol == "B") {
        move("0", "R", "final");
      } else if (tape[tm].symbol == "X") {
        move("B", "R", 24);
      }
      console.log("state25");
    } else if (state == 25) {
      if (tape[tm].symbol == "0") {
        move("0", "R", 25);
      } else if (tape[tm].symbol == "1") {
        move("B", "R", "final");
      }
      console.log("state25");
    } else if (state == "final") {
      finalState = true;
    } else if (state == 27) {
      if (tape[tm].symbol == "0") {
        move("0", "L", 27);
      } else if (tape[tm].symbol == "1") {
        move("1", "R", 18);
      } else if (tape[tm].symbol == "X") {
        move("X", "R", 18);
      }
    }
  }
}
