console.log("Node module wrapper ");

console.log('_dir in exp: ',__dirname);
console.log('_file in exp: ',__filename);

module.exports.greet =function(name){
    console.log(`hello ${name}`);
} 
