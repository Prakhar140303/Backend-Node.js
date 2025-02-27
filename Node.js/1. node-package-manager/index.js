const lodash = require('lodash'); 
let arr  = ['arr','jay', 'vijay']

let Arr = lodash.map(arr, lodash.capitalize);
console.log(Arr);