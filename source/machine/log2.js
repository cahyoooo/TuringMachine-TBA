let input1 = document.getElementById("input1");

function execute() {
    executeClear();
  
    tape.push(new Cell("B"));
    tape.push(new Cell("B"));
    machine.childNodes[1].className += " moving";
    tm = 2;
    state = 0;
  
    if (input1.value > 0) {
      for (i = 0; i < input1.value; i++) {
        tape.push(new Cell("1"));
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
        if (tape[tm].symbol == "1") {
          move("1", "R", 1);
        }else if (tape[tm].symbol == "B") {
            move("B", "R", "final")
        }
      } else if (state == 1) {
        if (tape[tm].symbol == "1") {
          move("1", "R", 2);
        } else if (tape[tm].symbol == "B") {
          move("B", "L", 11);
        }
      } else if (state == 2) {
        if (tape[tm].symbol == "1") {
            move("X", "R", 3);
        }else if(tape[tm].symbol == "B"){
            move("B", "L", 11);
        }
      } else if(state == 3){
        if (tape[tm].symbol == "1") {
            move("X","L", 4);
        }else if (tape[tm].symbol == "X") {
            move("X","R",3);
        }else if (tape[tm].symbol == "B") {
            move("B","L", 7);
        }
      }else if (state == 4 ) {
        if (tape[tm].symbol == "0") {
            move("0","L", 4);
        }else if (tape[tm].symbol == "1") {
            move("1", "L", 4);
        }else if (tape[tm].symbol == "X") {
            move("X", "L", 4);
        }else if (tape[tm].symbol == "B") {
            move("B", "R", 5);
        }
      }else if (state == 5) {
        if (tape[tm].symbol == "0") {
            move("1", "R", 6);
        }else if (tape[tm].symbol == "1") {
            move("0", "R", 5);
        }else if (tape[tm].symbol=="X") {
            move("1", "R", 6);
        }
      }else if (state == 6) {
        if (tape[tm].symbol == "0") {
            move("0", "R", 6);
        }else if (tape[tm].symbol == "1") {
            move("1","R",6);
        }else if (tape[tm].symbol == "X") {
            move("X", "R",3);
        }
      }else if (state == 7) {
        if (tape[tm].symbol == "0") {
            move("0", "L", 7);
        }else if (tape[tm].symbol == "1") {
            move("1", "L", 7);
        }else if (tape[tm].symbol == "X") {
            move("B","L", 7);
        }else if (tape[tm].symbol == "B") {
            move("B","R", 8);
        }
      }else if (state == 8) {
        if (tape[tm].symbol == "0") {
            move("1","R", 8);
        }else if (tape[tm].symbol == "1") {
            move("1", "R", 9);
        }
      }else if (state == 9) {
        if (tape[tm].symbol == "0") {
            move("1", "R", 9);
        }else if (tape[tm].symbol == "1") {
            move("1", "R", 10);
        }else if (tape[tm].symbol == "B") {
            move("B", "L", 11);
        }
      }else if (state == 10) {
        if (tape[tm].symbol == "0") {
            move("1", "R", 10);
        }else if (tape[tm].symbol == "1") {
            move("1", "R", 10);
        }else if (tape[tm].symbol == "B") {
            move("B", "L", "final");
        }

      }else if (state == 11) {
        if (tape[tm].symbol == "1") {
          move("B", "R", "final");
        }
      }finalState = true;
    }
}