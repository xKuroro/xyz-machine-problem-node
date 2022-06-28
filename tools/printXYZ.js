
const printXYZ = (number,text) => {
    
   let newStr = ''
for(let k = 0; k < text.length; k++){
    // print X
let str = '';
let letters = [];
 if(text[k] === 'X'){
for(let i = 0 ; i < number ; i++){
    for(let j = 0 ; j < number; j++){
        if(i == j || i + j == number - 1){
            str = str.concat('o')
          
        }else{
            str = str.concat(' ')
          
        }
    }
    str = str.concat('\n')
}
    newStr += str;
   
}

// print y
if(text[k] === 'Y'){
    let counter = 0;
for(let i = 0 ; i < number ; i++){
    for(let j = 0 ; j < number ; j++){
        let divide = Math.round(number / 2);
            if(j == counter|| i + j == number - 1
                && i <= parseInt(number / 2)){
                    str = str.concat('o')
            }else{
                    str = str.concat(' ')
                   
                }
    
}
    str = str.concat('\n')
      if (i < parseInt(number / 2)){
        counter++;
    }
}
newStr += str;
}

  if(text[k] === 'Z'){
    let maxNumber = number - 1;
    for(let i = 0 ; i < number; i++){
        for(let j = 0; j < number; j++){
            if(i == 0 || i == number - 1 || j == maxNumber){
                str = str.concat('o');
               
            }else{
                str = str.concat(' ');
            }
        }
        maxNumber--;
        str = str.concat('\n')
    }
    newStr += str;
  }

}
return newStr;
}

module.exports = printXYZ;