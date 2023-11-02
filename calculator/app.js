class Calculator {
  constructor(prevval, CrtVal) {
    this.CrtVal = CrtVal;
    this.prevval = prevval;
    this.clear();
  }

  clear() {
    this.crtoperated = "";
    this.preoperated = "";
    this.operation = undefined;
  }
  delete() {
    this.crtoperated = this.crtoperated.toString().slice(0, -1);
  }
  appendnumber(number) {
    if (number === "." && this.crtoperated.includes(".")) return;
    this.crtoperated = this.crtoperated.toString() + number.toString();
  }
  useroperation(operation) {
    if (this.crtoperated === "") return;

    if (this.preoperated !== "") {
      this.result();
    }
    this.operation = operation;
    this.preoperated = `${this.crtoperated} ${operation}`;
    this.crtoperated = "";
  }
  result() {
    let computation;
    const crt = parseFloat(this.crtoperated);
    const pre = parseFloat(this.preoperated);

    if (!crt) {
      this.crtoperated = pre;
      this.preoperated = "";
      this.operation = undefined;
    } else {
      switch (this.operation) {
        case "+":
          computation = crt + pre;
          break;
        case "-":
          computation = crt - pre;
          break;
        case "÷":
          computation = crt / pre;
          break;
        case "*":
          computation = crt * pre;
          break;
        default:
          break;
      }

      this.crtoperated = computation ? computation : undefined;
      this.preoperated = "";
      this.operation = undefined;
    }
  }
  updatedisplay() {
    if (this.crtoperated) {
      this.CrtVal.innerText = this.crtoperated;
    }
    this.prevval.innerHTML = this.preoperated;
  }
}

const numbersbtn = document.querySelectorAll("[data-number]");
const operationsbtn = document.querySelectorAll("[data-operation]");
const equalbtn = document.querySelector("[data-equal]");
const deletebtn = document.querySelector("[data-delete]");
const allClearbtn = document.querySelector("[data-all-clear]");
const prevval = document.querySelector("[data-pre-val]");
const CrtVal = document.querySelector("[data-crt-val]");

const calc = new Calculator(prevval, CrtVal);

numbersbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.appendnumber(btn.innerHTML);
    calc.updatedisplay();
  });
});

operationsbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.useroperation(btn.innerHTML);
    calc.updatedisplay();
  });
});

equalbtn.addEventListener("click", () => {
  calc.result();
  calc.updatedisplay();
});

allClearbtn.addEventListener("click", () => {
  calc.clear();
  calc.updatedisplay();
});
deletebtn.addEventListener("click", () => {
  calc.delete();
  calc.updatedisplay();
});

// KeyboardEvent

window.addEventListener("keypress", (event) => {
  if (
    event.key === "*" ||
    event.key === "÷" ||
    event.key === "+" ||
    event.key === "-"
  ) {
    calc.useroperation(event.key);
    calc.updatedisplay();
  } else if (!isNaN(event.key)) {
    calc.appendnumber(event.key);
    calc.updatedisplay();
  } else if (event.key === "Enter") {
    calc.result();
    calc.updatedisplay();
  } else if (event.key === ".") {
    calc.appendnumber(event.key);
    calc.updatedisplay();
  }
});
