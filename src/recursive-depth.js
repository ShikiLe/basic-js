import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, depth = 1) {
   let maxDepth = depth;
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       const currDepth = this.calculateDepth(arr[i], depth + 1);
       if (currDepth > maxDepth) {
         maxDepth = currDepth;
       }
     }
   }
   return maxDepth;
  }
}
