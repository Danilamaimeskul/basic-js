const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depths = 1, depthCounter = new Set()) {
    depthCounter.add(depths);

      for(let i in arr){
        if(Array.isArray(arr[i])){
          this.calculateDepth(arr[i], depths + 1, depthCounter);
        }
      }

      return Math.max(...depthCounter);
    }
};