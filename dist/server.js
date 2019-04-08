"use strict";
const sum = (a, b) => a + b;
let totalSum = 0;
console.log(typeof sum);
setInterval(() => {
    totalSum = sum(totalSum, 1);
    console.log(totalSum);
}, 1000);
//# sourceMappingURL=server.js.map