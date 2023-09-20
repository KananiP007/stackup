// JavaScript code for calculating the area of different shapes

class ShapeCalculator {
  static calculateArea(shape, params) {
      switch (shape) {
          case "circle":
              return Math.PI * Math.pow(params.radius, 2);
          case "rectangle":
              return params.length * params.width;
          case "triangle":
              return 0.5 * params.base * params.height;
          default:
              throw new Error("Invalid shape");
      }
  }
}

function displayResult() {
  const shape = document.getElementById("shape").value;
  const inputFields = document.getElementById("inputFields");
  const params = {};

  // Dynamically create input fields based on the selected shape
  switch (shape) {
      case "circle":
          inputFields.innerHTML = '<label for="radius">Radius:</label><input type="number" id="radius" required>';
          break;
      case "rectangle":
          inputFields.innerHTML = '<label for="length">Length:</label><input type="number" id="length" required>' +
                                  '<label for="width">Width:</label><input type="number" id="width" required>';
          break;
      case "triangle":
          inputFields.innerHTML = '<label for="base">Base:</label><input type="number" id="base" required>' +
                                  '<label for="height">Height:</label><input type="number" id="height" required>';
          break;
  }

  const calculateButton = document.getElementById("calculateButton");
  const result = document.getElementById("result");

  calculateButton.addEventListener("click", () => {
      try {
          params.radius = parseFloat(document.getElementById("radius").value) || 0;
          params.length = parseFloat(document.getElementById("length").value) || 0;
          params.width = parseFloat(document.getElementById("width").value) || 0;
          params.base = parseFloat(document.getElementById("base").value) || 0;
          params.height = parseFloat(document.getElementById("height").value) || 0;

          const area = ShapeCalculator.calculateArea(shape, params);
          result.textContent = `The area of the ${shape} is: ${area.toFixed(2)}`;
      } catch (error) {
          result.textContent = error.message;
      }
  });
}

document.addEventListener("DOMContentLoaded", displayResult);
