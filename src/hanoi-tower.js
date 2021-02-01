const CustomError = require("../extensions/custom-error");
let result = {
  turns: 0,
  seconds: 0
}
module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor( 3600 / turnsSpeed  * result.turns );
  return result;
};

