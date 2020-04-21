"use strict";

const Prime = function (m) {
  for (let i = 2; i < m; i += 1) {
    if (m % i === 0) {
      return false;
    }
  }
  return true;
}

const getPrimes = function (n) {
  for (let i = 2; i <= n; i += 1) {
    if (Prime(i)) {
      console.log(i);
    }
  }
}

getPrimes(10);