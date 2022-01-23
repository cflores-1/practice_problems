// 'Create the New Year Countdown, recursively' 'logs every number between the number 
//passed to it and logs'Happy New Year' at 0. 
// 'Assume number is greater than one'

// const CountDown2022 = () =>{

// }

const CountDown2022 = (num) =>{
    //base case: console log happy new year at 0
	if (num === 0) {
      console.log(num, 'happy new year')
    } else {
      console.log(num)
      CountDown2022(num - 1)
    }
}
CountDown2022(100)