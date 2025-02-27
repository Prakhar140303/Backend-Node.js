const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register my first listener:

myFirstEmitter.on('greet',(name)=>{
    console.log(`hello ${name}`);
});

myFirstEmitter.emit('greet',"Prakhar Singh");
