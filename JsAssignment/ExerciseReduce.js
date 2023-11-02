var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;
var newArray = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,sum,
);
console.log(newArray);