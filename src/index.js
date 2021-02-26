const numbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
};

module.exports = function toReadable (number) {

  if (number <= 20 ) {
    return numbers[number];
  } else if (number <= 99 && number > 20) {
    return (`${numbers[number - [Math.floor(number % 10)]]} ${number % 10 !== 0 ? numbers[number % 10] : ''}`).trim();
  } else if (number >= 100 && number < 1000 && number % 10 == 0) {
    return (`${(numbers[Math.floor(number / 100) ])} hundred ${number % 100 === 0 ? '' : numbers[number % 100]}`).trim();
  }
  else if (number % 100 !== 0 && number % 10 !==0){
    return (`${(numbers[Math.floor(number / 100) ])} hundred ${number % 100 > 20 ? numbers[((number % 100) - (number % 10))] : numbers[number % 100]} ${number % 100 > 20 ? numbers[number % 10] : ''}`).trim();
  }
  };


