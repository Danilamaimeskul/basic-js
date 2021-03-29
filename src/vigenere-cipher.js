const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(a){
    if(a === false){
      this.typeMachine = false;
    }
    else{
      this.typeMachine = true;
    }
    }
  encrypt(stringParam, stringKey) {
    if(stringParam== undefined || stringKey == undefined) throw new Error('THROWN');
    if(typeof(stringParam) != "string" || typeof(stringKey) != "string") throw new Error('THROWN');
    let y = 0;
    let str = [];
    stringParam = stringParam.split("");
    stringKey = stringKey.split("");
    for(let i = 0; i < stringParam.length; i++){
      stringParam[i] = stringParam[i].toLowerCase();
    }
    for(let i = 0; i < stringKey.length; i++){
      stringKey[i] = stringKey[i].toLowerCase();
    }
    for(let i = 0; i < stringParam.length; i++){
      if(stringParam[i].charCodeAt() < 97 || stringParam[i].charCodeAt() > 122){
      str[i] = stringParam[i];
      --y;
    }
    else if(stringParam[i].charCodeAt() + stringKey[y].charCodeAt() - 97 > 122){
      str[i] = String.fromCharCode(stringParam[i].charCodeAt() + stringKey[y].charCodeAt()-123)
    }else{
      str[i] = String.fromCharCode(stringParam[i].charCodeAt() + stringKey[y].charCodeAt()-97)
    }
    if(str[i] === '`') str[i] = "z";
    ++y;
    if(y === stringKey.length) y = 0;
    }
    for(let i = 0; i < str.length; i++){
      str[i] = str[i].toUpperCase();
    }
    if(this.typeMachine === false) str = str.reverse();
    str = str.join("");
    return str;
    }   
  decrypt(stringParam, stringKey) {
    if(stringParam == undefined || stringKey == undefined) throw new Error('THROWN');
    if(typeof(stringParam) != "string" || typeof(stringKey) != "string")throw new Error('THROWN');
    let y = 0;
    let str = [];
    stringParam = stringParam.split("");
    stringKey = stringKey.split("");
    for(let i = 0; i < stringParam.length; i++){
      stringParam[i] = stringParam[i].toLowerCase();
    }
    for(let i = 0; i < stringKey.length; i++){
      stringKey[i] = stringKey[i].toLowerCase();
    }
    for(let i = 0; i < stringParam.length; i++){
      if(stringParam[i].charCodeAt() < 97 || stringParam[i].charCodeAt() > 122){
        str[i] = stringParam[i];
        --y
      }
      else if(stringParam[i].charCodeAt() - stringKey[y].charCodeAt() + 97 >= 96){
        str[i] = String.fromCharCode(stringParam[i].charCodeAt() - stringKey[y].charCodeAt() + 97)
      }else{
        str[i] = String.fromCharCode(stringParam[i].charCodeAt() - stringKey[y].charCodeAt() + 123)
      }
      if(str[i] === '`') str[i] = "z";
      ++y;
      if(y === stringKey.length) y = 0;
    }
    if(this.typeMachine === false) stringParam.reverse()
    for(let i = 0; i < str.length; i++){
      str[i] = str[i].toUpperCase();
    }
    if(this.typeMachine === false) str.reverse();
    str = str.join("");
    return str;
  }
}

module.exports = VigenereCipheringMachine;
