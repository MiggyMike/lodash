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
      // create a variable  to set it = to the v at the CURRENT key in object
      let originalValue = object[key];
      // set the VALUE of the inverted object to the originalValue to be the CURRENT key
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  // MAGGIES APPROACH
  //   invert(object) {
  //     let invertedObject = {};
  //     for (let key in object) {
  //       const originalValue = object[key];
  //       invertedObject = { originalValue: key };
  //     }
  //     return invertedObject;
  //   },
  // };

  // implement .findKey() method -- takes two arguemnts(object, predicate function(one that returns a boolean value))
  //  iterates through each k/v an calls the predicate fn wit hthe value
  //  returns the first value that returns truthy
  //  returns undefined if no values  return truthy
  findKey(object, fn) {
    for (const key in object) {
      // this var is set to = the current key in the object
      const value = object[key];
      //we need to create another var to hold the result of calling the predicate fn with value
      // this var is set to = the result of calling the predicate w/value
      let fnReturnValue = fn(value);
      if (fnReturnValue === true) {
        return key;
      }
      return undefined;
    }
  },
  // implement .drop() method -- takes 2 args, and arry and a number(number of items to drop)
  //  returns a new arr containing all elements excluding the dropped items
  // by default it drops 1
  drop(arr, num) {
    // check to see if num is set, if not set to zero
    if (num === undefined || 0) {
      num = 1;
    }
    // create new array with dropped elements. we can use .slice to achieve this
    let arrNew = arr.slice(num);
    // MAGGIES version
    // arrNew = arr.slice(num, arr.length);
    // arr = arrNew;
    return arrNew;
  },
  // implement dropWhile() -- takes two arg( array, predicate fn )
  // the predicate fn take 3 args(current el, current el index, entire array)
  // dW creates a new copy of the array, dropping el from the begining until an el causes the predicate fn to return falsy
  dropWhile(arr, predicate) {
    // anon callback function
    const cb = (el, index) => {
      // negate teh returned value of predicate to make all truthy -> falsy
      return !predicate(el, index, arr);
    };
    // itereate through array until an element that cause a falsy value return USING .findIndex()
    // pass an anon callback fn that takes to agrs (el, index) to the findIndex()
    let numDropped = arr.findIndex(cb);
    // use out .drop() method to drop the elements prior to that on that returned falsy
    let arrNew = this.drop(arr, numDropped);
    // return the modified arr
    return arrNew;
  },
  // implement chunk() method -- takes two args(arr and size)
  // takes an arry and separates into new individual arrays based on the size noted or 1, then groups those arrays in one array.
  chunk(arr, size) {
    // checks to see if size if defined
    if (size === undefined || 0) {
      let size = 1;
    }
    // ccreate var to hold arr chunks
    arrChunks = [];
    // loop throug arr and create arr chunks of specified size
    // i += size increments by size on each loop
    for (let i = 0; i < arr.length; i += size) {
      // create var = to the chunk of the array going from the current loop index to the current loop index plus size
      arrChunk = arr.slice(i, i + size);
      // add arrChunk to the end of arrChunks
      arrChunks.push(arrChunk);
    }
    return arrChunks;
  },
};
// Do not write or modify code below this line.
module.exports = _;
