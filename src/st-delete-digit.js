import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = Array.from(n.toString());
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const index = arr.indexOf(sortedArr[0]);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      result.push(arr[i]);
    }
  }
  return parseInt(result.join(''), 10);
}
