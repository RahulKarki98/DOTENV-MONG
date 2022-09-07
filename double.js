const double=(num)=>num*2;

// console.log(process.argv)

// console.log(process.argv[1]);
//  console.log(double(10));

const [,,n]= process.argv;

console.log(double(n));


// process.argv - 2 elements
// 1 element - execution path
// 2 lement - path of the js file