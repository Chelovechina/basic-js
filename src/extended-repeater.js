const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let string = '';
  const { repeatTimes, addition, separator, additionRepeatTimes, additionSeparator } = options;

  if (!repeatTimes) {
    string = str + addition;
    return string;
  }

  for (let i = 0; i < repeatTimes; i++) {
    string += str;

    if (additionRepeatTimes) {
      for (let x = 0; x < additionRepeatTimes; x++) {
        string += addition;

        if (!additionSeparator && x + 1 !== additionRepeatTimes) {
          string += '|';
        } else if (additionSeparator && x + 1 !== additionRepeatTimes) {
          string += additionSeparator;
        }
      }
    } else if (addition && !additionRepeatTimes) {
      string += addition;
    }

    if (!separator && i + 1 !== repeatTimes) {
      string += '+';
    } else if (separator && i + 1 !== repeatTimes) {
      string += separator;
    }
  }

  return string;
}

module.exports = {
  repeater,
};
