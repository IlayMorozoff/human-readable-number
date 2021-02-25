module.exports = function toReadable (number) {

  let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'];
      
  let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
      'ninety'];

  let numString = number.toString();

  if (number <20){
      return zeroToNineteen[number];
  }

  if (numString .length === 2){
      if (numString[1] === '0'){
          return  twentyToNinety[numString[0]];
      } else
      return twentyToNinety[numString[0]]+' '+zeroToNineteen[numString[1]];
  }

  if (numString.length === 3){
      if (numString[1] === '0' && numString[2] === '0' ) {
          return zeroToNineteen[numString[0]] + ' hundred';
      } else

      return zeroToNineteen[numString[0]]+' hundred '+ toReadable(+(numString[1]+numString[2]));

      }
  };


