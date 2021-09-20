import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let arr = [];
  let t = '';
  let obj = {};

  domains.forEach(e=>{
      arr.push(e.split('.'))
  });

  for (let i = 0; i < arr.length; i++) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
          t += '.';
          t += arr[i][j];
          if (obj.hasOwnProperty(t)) {
              obj[t]++;
          } else {
              obj[t] = 1;
          }
      }
      t = '';
  }
  return obj;
}
