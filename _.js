const _ = {
  // game plan for implementing .clamp() method -- takes 3 values (number, lower boudn and upper bound)
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  // game plan for implementing .inRange() method -- takes 3 values (number, start value, end value)
  inRange(number, startValue, endValue) {
    // Check to see if the end value is undefined. If so, set the end value equal to the start value and then set the start value equal to 0.
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    } // Check to see if the start value is larger than the end value. If so, swap the two values.
    if (startValue > endValue) {
      //we create a variable that will temporarily store the end value to access when we need to set the new start value and complete the swap.
      let temp = endValue;
      endValue = startValue;
      startValue = temp;
    }
    // Using boolean operators, find out if the number is in the specified range.
    let isInRange = startValue <= number && number < endValue;
    // Return the value of the previous operation from the method
    return isInRange;
  },
  // game plan for implementing .words() method -- takes 1 value  (string)
  words(string) {
    // let arrWords = [];
    let words = string.split(" ");
    return words;
  },
  // game plan for implementing .pad() method -- takes two values (string, length, char)
  pad(string, length) {
    // checking if the the length is less than/eqaul to the string length and if true return string
    if (length <= string.length) {
      // changed > to <
      return string;
    }

    // create a var to store the start padded length = diff of length and strings length / 2 and rounded down
    let startPad = Math.floor((length - string.length) / 2); //math.floor rounds down not math.round
    // create var to store the end padded length = legnth minus strings length - startPad
    let endPad = length - string.length - startPad;
    // creating a var to put it all together usig the .repeat() method
    let allPad = " ".repeat(startPad) + string + " ".repeat(endPad);

    return allPad;
  },
  // implement has method -- takes two args (object and key)
  // .has() checkes to see if the provided obejct contains a values at a specified key
  // returns true if value is present / false if not
  has(object, key) {
    // access the current value at the specified key in the object.
    // check to see if the value at that key is undefined.
    hasValue = object[key] != undefined;
    // return false if the value is undefined and true if not.
    return hasValue;
  },

  //  // maggies's method
  // has(object, key){
  //   const hasValue = object[key]
  //   if(hasValue!= undefined){
  //     return true;
  //   }return false;
  // }

  // implement .invert() methd -- takes one arg (an object)
  // iterates through each k/v pair in the provided object and swaps the key and value
  invert(object) {
    // create new object to represent inverted object
    // Object = invertOject;
    let invertedObject = {};
    // iterate through each key with a for...in loop
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        // create a variable  to set it = to the v at the CURRENT key in object
        let originalValue = object[key];
        // set the VALUE of the inverted object to the originalValue to be the CURRENT key
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;
