# Shape Area Calculator Website

This is a simple web application that allows users to calculate the area of different geometric shapes (circle, rectangle, and triangle) based on their input.

## Features

- **Shape Selection:** Users can choose a shape from a dropdown list.
- **Dynamic Input Fields:** Input fields are dynamically generated based on the selected shape.
- **Area Calculation:** The area is calculated and displayed when the user clicks the "Calculate" button.
- **Error Handling:** If the user enters invalid input, error messages are displayed.

## Code Explanation

- `index.html` defines the structure of the webpage, including the form and result display area.
- `styles.css` provides basic styling to make the webpage visually appealing.
- `script.js` contains the JavaScript logic:
  - A `ShapeCalculator` class calculates the area based on the selected shape using a switch statement.
  - Input fields are dynamically generated based on the selected shape.
  - A try-catch block handles errors, such as invalid input.

## Usage

1. Open `index.html` in a web browser.
2. Select a shape from the dropdown list.
3. Fill in the required input fields.
4. Click the "Calculate" button.
5. The area of the selected shape will be displayed, or an error message will appear for invalid input.

Enjoy calculating geometric areas with this simple web application!

