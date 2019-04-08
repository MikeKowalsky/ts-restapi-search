const sum = (a: number, b: number) => a + b;
let totalSum: number = 0;
console.log(typeof sum);
setInterval(() => {
  totalSum = sum(totalSum, 1);
  console.log(totalSum);
}, 1000);
