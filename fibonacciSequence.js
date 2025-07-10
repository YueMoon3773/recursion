//The Fibonacci Sequence, is a numerical sequence where each number is the sum of the two numbers before it. 
// Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

// iteration way
const fibs = size => {
  console.log('This was printed recursively');
  if (size === 0) {
    return [];
  } else if (size === 1) {
    return [0];
  } else if (size === 2) {
    return [0, 1];
  } else {
    let ret = [0, 1];
    for ( let i = 1; i < size; i++){
        ret.push(ret[ret.length - 1] + ret[ret.length - 2])
    }
    return ret;
  }
};

const a = fibs(8);
console.log(a);    ////[0,   1,  1,  2,  3,  5, 8,  13, 21]

// recursion way
const fibsRec = size => {
  console.log('This was printed recursively');
  if (size === 0) {
    return [];
  } else if (size === 1) {
    return [0];
  } else if (size === 2) {
    return [0, 1];
  } else {
    let ret = fib(size - 1);
    ret.push(ret[ret.length - 1] + ret[ret.length - 2]);
    return ret;
  }
};

const b = fibsRec(14);
console.log(b);     //[0,   1,  1,  2,  3,  5, 8,  13, 21, 34, 55, 89, 144, 233]
