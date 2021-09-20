import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const strArr = str.split('');
  let count = 1;
  let temp = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count += 1;
    }
    if (strArr[i] !== strArr[i + 1]) {
      temp += count.toString();
      temp += strArr[i];
      count = 1;
    }
  }
  const tempArr = temp.split('');
  let result = '';
  tempArr.forEach((el) => {
    if (el !== '1') {
      result += el;
    }
  });
  return result;
}
