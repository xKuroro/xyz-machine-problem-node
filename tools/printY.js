let number = 3;
let str = '';
let newStr = ''
let counter = 0;
for(let i = 0 ; i < number ; i++){
    for(let j = 0 ; j < number ; j++){
        let divide = Math.round(number / 2);
        // if (Math.round(number / 2) > i){
        
    if(j == counter|| i + j == number - 1
        && i <= parseInt(number / 2)){
            str = str.concat('o')
    }else{
            str = str.concat(' ')
            // console.log(str)
        }
}
    str = str.concat('\n')
 
   newStr += str;   if (i < parseInt(number / 2)){
        counter++;
    // console.log(counter)
    }
    }
    console.log(newStr)
   console.log(typeof newStr)

    console.log(Math.round(5/ 2))