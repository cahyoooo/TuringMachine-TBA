class Cell {
  constructor(symbol) {
    this.symbol = symbol;
    let tag = document.createElement("p");
    let text = document.createTextNode(this.symbol);
    tag.appendChild(text);
    let tape = document.getElementById("machine");
    tape.appendChild(tag);
  }

  changeTo(newSymbol) {
    this.symbol = newSymbol;
  }
}
