"use strict";
console.log('it works')
const ps = require('prompt-sync')
const prompt1 = ps();
const prompt2 = ps();
const validation = require("./tools/validation");
const printXYZ = require("./tools/printXYZ");

const inputNumber = parseInt(prompt1("Enter odd number above 2: "));
const inputText = prompt2("Enter letter X, Y and Z: ").trim().toUpperCase();
const inputDirection = prompt1("Enter direction vertical or horizontal: ")
  .trim()
  .toUpperCase();

let ff = validation.validation(inputNumber, inputText, inputDirection);
let splitText = inputText.split("");


if (!ff) {
  console.log("Input text field correctly.");
} else {
  let arrayPrint = printXYZ(inputNumber, splitText);

  if (inputDirection && inputDirection === "HORIZONTAL") {
    console.log("This is horizontal");
    console.log(arrayPrint.row);
  } else {
    console.log("This is vertical");
    console.log(arrayPrint.newStr);
  }
}