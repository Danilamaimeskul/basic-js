const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  for(let i in arr){
    if(typeof arr[i] == 'number') {
      continue;
    }
    else {
      if(arr[i] == '--discard-next' ){
        if(arr[i + 2] == '--double-prev'){
          continue;
        }
        else if(i != arr.length){
          arr.splice(i + 1, 1);
        }
        arr.splice(i, 1);
      }
      else if(arr[i] == '--discard-prev'){
        if(arr[i - 2] == '--double-next'){
          continue;
        }
        if(i != 0){
          arr.splice(i - 1, 1);
        }
        arr.splice(i, 1);
      }
      else if(arr[i] == '--double-next'){
        if(arr[i + 2] == '--discard-prev'){
          continue;
        }
      }
      else if(arr[i] == '--double-prev'){
        if(arr[i - 2] == '--discard-next'){
          continue;
        }
      }
    }
  }
  return arr;
};
