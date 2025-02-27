const  fs = require('fs');
const path = require('path');
const dataFolder  = path.join(__dirname,'data');

// create a folder if not exists
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'EXAMPLE');
// synchronously create
fs.writeFileSync(filePath, "const data = {  name: 'John Doe',   age: 30};");
console.log('File created successfully');

const  readContent = fs.readFileSync(filePath, 'utf8');
console.log('Read content: \n', readContent);
fs.appendFileSync(filePath,'\n This is a new line added in this file');
console.log('Read content 2:\n', readContent);

const  asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath,'hello async node js',(err)=>{
    if(err) throw err;
    console.log('Async file created successfully');
    fs.readFile(asyncFilePath, 'utf8',(err, data)=>{
        if(err) throw err;
        console.log('Read content from async file: \n', data);
    })
    fs.appendFile(asyncFilePath,'\nthis is another line added',(err)=>{
        if(err) throw err;
        console.log('Async file updated successfully');
    });
    const updatedData = fs.readFile(asyncFilePath,'utf-8',(err,data)=>{
        if(err) throw err;
        console.log('Updated content from async file: \n', data);
    })

});