let display = document.getElementById("display");

function number(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function operator(operator) {
  display.value += operator;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "0";
}
