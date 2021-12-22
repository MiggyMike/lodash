const _ = {
  // game plan for implementing .clamp() method -- takes 3 values (number, lower boudn and upper bound)
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
};

// Do not write or modify code below this line.
module.exports = _;
