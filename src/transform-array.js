import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i === arr.length - 1) {
        break;
      } else {
        i += 2;
      }
    } else if (arr[i] === "--discard-prev") {
      result.pop();
    } else if (arr[i] === "--double-next") {
      if (i === arr.length - 1) {
        break;
      } else {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i !== 0) {
        result.push(arr[i - 1]);
      }
      // } else {
      //   result.push(arr[i]);
      // }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
