// test to see what happens when the array has more numbers than our function has parameters
function add(a, b, c, d) {
    return a + b + c + d ;
  }
  const arr = [1, 2, 3, 4, 5];
  
  let additionOfThings = add(...arr); // returns 6