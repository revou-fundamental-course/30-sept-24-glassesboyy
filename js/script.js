function updateCalculation(formula, result) {
  let input = document.getElementById("input-temperature").value;
  let inputUnit = document.getElementById("input-unit").value;
  let calculationText = `${input}°${inputUnit} ${formula}\n= ${result}`;
  document.getElementById("calculation").value = calculationText;
}

function convertTemperature() {
  let input = parseFloat(document.getElementById("input-temperature").value);
  let inputUnit = document.getElementById("input-unit").value;
  let outputUnit = document.getElementById("output-unit").value;

  if (isNaN(input)) {
    alert("Masukkan suhu terlebih dahulu!");
    return;
  }

  let result, formula;

  if (inputUnit === "C") {
    if (outputUnit === "F") {
      result = (input * 9) / 5 + 32;
      formula = "× (9/5) + 32";
    } else if (outputUnit === "K") {
      result = input + 273.15;
      formula = "+ 273.15";
    } else if (outputUnit === "R") {
      result = (input * 4) / 5;
      formula = "× (4/5)";
    } else {
      result = input;
      formula = "";
    }
  } else if (inputUnit === "F") {
    if (outputUnit === "C") {
      result = ((input - 32) * 5) / 9;
      formula = "- 32 × (5/9)";
    } else if (outputUnit === "K") {
      result = ((input - 32) * 5) / 9 + 273.15;
      formula = "- 32 × (5/9) + 273.15";
    } else if (outputUnit === "R") {
      result = ((input - 32) * 4) / 9;
      formula = "- 32 × (4/9)";
    } else {
      result = input;
      formula = "";
    }
  } else if (inputUnit === "K") {
    if (outputUnit === "C") {
      result = input - 273.15;
      formula = "- 273.15";
    } else if (outputUnit === "F") {
      result = ((input - 273.15) * 9) / 5 + 32;
      formula = "- 273.15 × (9/5) + 32";
    } else if (outputUnit === "R") {
      result = ((input - 273.15) * 4) / 5;
      formula = "- 273.15 × (4/5)";
    } else {
      result = input;
      formula = "";
    }
  } else if (inputUnit === "R") {
    if (outputUnit === "C") {
      result = (input * 5) / 4;
      formula = "× (5/4)";
    } else if (outputUnit === "F") {
      result = (input * 9) / 4 + 32;
      formula = "× (9/4) + 32";
    } else if (outputUnit === "K") {
      result = (input * 5) / 4 + 273.15;
      formula = "× (5/4) + 273.15";
    } else {
      result = input;
      formula = "";
    }
  }

  result = result.toFixed(2);
  document.getElementById(
    "output"
  ).value = `${input}°${inputUnit} = ${result}°${outputUnit}`;
  updateCalculation(formula, `${result}°${outputUnit}`);
}

function resetForm() {
  document.getElementById("input-temperature").value = "";
  document.getElementById("input-unit").value = "C";
  document.getElementById("output-unit").value = "F";
  document.getElementById("output").value = "";
  document.getElementById("calculation").value = "";
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
});
