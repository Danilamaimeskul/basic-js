const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) throw new Error('THROW');
  //if(arr.length == 0) {return arr;}
  else{
    for(let i in arr){
      if(arr[i] ===  "--discard-next"){
        if(i === arr.length - 1) {arr.slice(i, 1);}
        else{
          arr.slice(i, 2);
        }
      }
      if(arr[i] === "--discard-prev"){
          arr.slice(i - 1, 2);

      }
      
    }
    return arr;
  }
}

