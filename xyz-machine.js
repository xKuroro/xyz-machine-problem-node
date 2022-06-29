"use strict";
console.log('it works')
const ps = require('prompt-sync')
const prompt1 = ps();
const prompt2 = ps()
const name = require('./tools/classInput');
const validation = require('./tools/validation');
const printXYZ = require('./tools/printXYZ');
const e = require('express');

prompt1.toString()
console.log(name.inputs.inputsText)
// const names = prompt('enter name: ');
// console.log(names)


    const inputNumber = parseInt(prompt1('Enter odd number above 2: '))
    const inputText = prompt2('Enter letter X,Y and Z: ').trim().toUpperCase();
    const inputDirection = prompt1('Enter Direction Vertical or Horizontal: ').trim().toUpperCase();

   
  let ff = validation.validation(inputNumber,inputText,inputDirection);
  let splitText = inputText.split('');
  console.log(splitText)

  if(!ff){
    console.log('input text field correctly.')
  }else{
    let vertical = '';
    let temp = '';
   let arrayPrint = printXYZ(inputNumber,splitText)
  //  vertical = vertical + arrayPrint;
  // vertical.forEach(ver =>)
   if(inputDirection && inputDirection === 'HORIZONTAL'){
    console.log('This is horizontal')
    console.log(arrayPrint);
   }else{
    console.log(arrayPrint)
   }
  }