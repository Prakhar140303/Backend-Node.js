const { log } = require('console');
const path = require('path');

console.log("Dir name : ", path.basename(path.dirname(__filename)) );
console.log("File name : ", path.basename(__filename) );

console.log("Extension : ", path.extname(__filename) );

const joinpath = path.join("/user","desktop","Node.js","path-module");
console.log(joinpath);

const resolvePath = path.resolve("/user","desktop","Node.js","path-module");
console.log(resolvePath);
