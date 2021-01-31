const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members){
  let result = '';  
  if(Object.prototype.toString.call(members) == "[object Array]" ){
    for(let i in members){
      let j = 0;
      if(typeof members[i] == "string"){
        while(members[i][j] == ' ') j++;
        result += members[i][j];
      }
    }
  }
  return result.toUpperCase().split('').sort().join('');
}
