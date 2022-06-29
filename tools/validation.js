const validation = (num,text,direction) => {
    let errorNumber = false;
    let errorText = false;
    let errorDirection = false;
    let successed = false;
    const correctDirection = ['VERTICAL', 'HORIZONTAL']
    console.log(num)

    if(~~num == 0 || (num % 2) === 0 || !num > 2){
        console.log('input ODD numbers.');
    }else{
        errorNumber =  true;
    }if(!textXYZ(text)){
        console.log('Letters must contain X,Y and Z')
    }else{
        errorText = true;
    }if(direction && !correctDirection.includes(direction)){
        console.log('text should be VERTICAL or HORIZONTAL.');
    }else{
        errorDirection = true;
    }

    return (errorNumber && errorText && errorDirection ? successed = true : successed)

}

function textXYZ(ar){
    const re = /^[XYZ]*$/;
    return re.test(String(ar));
}
module.exports.validation = validation;