//console.log(numberList(3, '*'));//"1*2*3"
//console.log(numberList(7, '-'));//"1-2-3-4-5-6-7"

//- write numberList

const numberList = (num, str) => {
    let result ='';
    for (let i = num - 1; i >= 0; i--) {
        let val = num - i;
        if (i == 0){
            result += val.toString();
        } else {
            result += val.toString() + str;
        }
      
    }
    return result;
  }
//console.log(numberList(3, '*'));//"1*2*3"
console.log(numberList(10, '-'));//"1-2-3-4-5-6-7"