import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  function count(array) {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
      const cur = array[i];
      if (obj[cur]) {
        obj[cur] += 1;
      } else {
        obj[cur] = 1;
      }
    }
    return obj;
  }
  let temp = 0;
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const s1Obj = count(s1Arr);
  const s2Obj = count(s2Arr);
  const s1Keys = Object.keys(s1Obj);

  for (let i = 0; i < s1Keys.length; i++) {
    const key = s1Keys[i];
    if (s2Obj[key]) {
      temp += Math.min(s1Obj[key], s2Obj[key]);
    }
  }
  return temp;
}
