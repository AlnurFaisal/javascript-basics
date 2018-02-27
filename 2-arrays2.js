var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

assertEquals(sum([1, 2, 3, 4]), 10);
assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
  var even_arr = [];
  var counter = 0;
  var checkEvenodd = null;
  for (var i = 0; i < array.length; i++) {
    checkEven = array[i] % 2;
    if (checkEven === 0) {
      even_arr[counter] = array[i];
      counter++;
    }
  }
  return even_arr;
}

assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
function sumEvenNumbers(array) {
  var total = 0;
  var checkEven = null;
  for (var i = 0; i < array.length; i++) {
    checkEven = array[i] % 2;
    if (checkEven === 0) {
      total += array[i];
    }
  }
  return total;
}

assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);
