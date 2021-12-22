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
};

// Do not write or modify code below this line.
module.exports = _;
