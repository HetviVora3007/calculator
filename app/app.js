function calculate(number) {
  let result = document.getElementById("inputtext");
  if (number === "AC") {
    result.value = "";
  } else {
    result.value += number;
  }
}

function Result() {
  let result = document.getElementById("inputtext");
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Enter the valid input");
  }
}

function remove() {
  let result = document.getElementById("inputtext");
  result.value = result.value.slice(0, -1);
}
