
const printXYZ = (number, text) => {
  let newStr = "";
  let contanerArrays = [];
  for (let k = 0; k < text.length; k++) {
    let str = "";
    let strArr = "";
    let letters = [];
    // print X
    if (text[k] === "X") {
      for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
          if (i == j || i + j == number - 1) {
            str = str.concat("o" + " ");
            strArr = strArr.concat("o" + " ");
          } else {
            str = str.concat(" " + " ");
            strArr = strArr.concat(" " + " ");
          }
        }
        letters.push(strArr);
        strArr = "";
        str = str.concat("\n");
      }
      newStr += str;
    }

    // print y
    if (text[k] === "Y") {
      let counter = 0;
      for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
          let divide = Math.round(number / 2);
          if (
            j == counter ||
            (i + j == number - 1 && i <= parseInt(number / 2))
          ) {
            str = str.concat("o" + " ");
            strArr = strArr.concat("o" + " ");
          } else {
            str = str.concat(" " + " ");
            strArr = strArr.concat(" " + " ");
          }
        }
        letters.push(strArr);
        strArr = "";
        str = str.concat("\n");
        if (i < parseInt(number / 2)) {
          counter++;
        }
      }
      newStr += str;
    }

    if (text[k] === "Z") {
      let maxNumber = number - 1;
      for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
          if (i == 0 || i == number - 1 || j == maxNumber) {
            str = str.concat("o" + " ");
            strArr = strArr.concat("o" + " ");
          } else {
            str = str.concat(" " + " ");
            strArr = strArr.concat(" " + " ");
          }
        }
        letters.push(strArr);
        strArr = "";
        maxNumber--;
        str = str.concat("\n");
      }
      newStr += str;
    }
    contanerArrays[k] = letters;
  }

  let row = directionRow(contanerArrays, number);

  return { newStr, row };
};

function directionRow(array, len) {
  let stringHorizontal = "";

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < array.length; j++) {
      stringHorizontal = stringHorizontal.concat(array[j][i] + "    ");
    }

    stringHorizontal = stringHorizontal.concat("\n");
  }
  return stringHorizontal;
}


module.exports = printXYZ;