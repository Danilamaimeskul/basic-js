const CustomError = require("../extensions/custom-error");
/* repeatTimes: number , separetor: string, addition: string, 
additionRepeatTime: number, additionSeparator: string */
module.exports = function repeater(str, { repeatTimes = 0 , separator = '+', addition = '', 
  additionRepeatTimes = 1, additionSeparator = ''}) {
  //throw new CustomError('Not implemented');   
  let result = '';
  result += str;
  for(let i = 0; i < repeatTimes; i++){    
    for(let j = 0; j < additionRepeatTimes; j++){
      if(additionRepeatTimes - j == 1){
        result += addition;
      }
      else {
        result += addition + additionSeparator;   
      }   
    }
    if(repeatTimes - i == 1){
      continue;
    }
    else {
      result += separator + str;   
    }   
  }
  if(repeatTimes === 0){
    return result + addition;
  }
  return result;
};
  