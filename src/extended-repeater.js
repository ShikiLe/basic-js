import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = '';
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;

  if (options.hasOwnProperty('repeatTimes')) {
      repeatTimes = options['repeatTimes'];
  } else {
      repeatTimes = 1;
  }

  if (options.hasOwnProperty('separator')) {
      separator = options['separator'];
  } else {
      separator = '+';
  }

  if (options.hasOwnProperty('addition')) {
      addition = options['addition'];
  }

  if (options.hasOwnProperty('additionRepeatTimes')) {
      additionRepeatTimes = options['additionRepeatTimes'];
  } else {
      additionRepeatTimes = 1;
  }

  if (options.hasOwnProperty('additionSeparator')) {
      additionSeparator = options['additionSeparator'];
  } else {
      additionSeparator = '|';
  }

  if (typeof str !== 'string' || typeof addition !== 'string') {
      str += '';
      if (addition !== undefined) {
          addition += '';
      }
  }
  for (let i = 0; i < repeatTimes; i++) {
      result += str;
      for (let j = 0; j < additionRepeatTimes; j++) {
          if (addition !== undefined) {
              result += addition;
          }
          if (j !== additionRepeatTimes - 1 && additionSeparator !== undefined) {
              result += additionSeparator;
          }
      }
      if (i !== repeatTimes - 1 && separator !== undefined) {
          result += separator;
      }
  }
  return result;
}
