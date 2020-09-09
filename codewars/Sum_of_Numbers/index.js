const a = 1;
const b = -4;

const getSum = (a, b) => {
  let result = 0;

  if (a === b) {
    result = a;
  }
  
  a < b ? result = sum(a, b) : result = sum(b, a);
  
  return result;
};


function sum (from, to) {
  let sum = 0;
  for ( let i = from; i <= to; i++ ) {
    sum += i;
  }
  
  return sum;
}


console.log(getSum(a, b));