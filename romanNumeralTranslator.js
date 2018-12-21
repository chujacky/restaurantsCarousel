/* eslint-disable */
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  var sum = 0;
  if (typeof romanNumeral !== 'string' || !romanNumeral.length) {
    return null;
  }
//return the value if input's length is one
  if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral];
  }
//if input's length is longer than one, check from the front
  for (var i = 0; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i+1]] > DIGIT_VALUES[romanNumeral[i]]) {
      sum += DIGIT_VALUES[romanNumeral[i+1]] - DIGIT_VALUES[romanNumeral[i]];
      i++;
      continue;
    }
    sum += DIGIT_VALUES[romanNumeral[i]]
  }
  return sum;
};