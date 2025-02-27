const EventEmitter = require('events')

class MyCustomEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'hello'
    }
    greet(name){
        this.emit('greeting',` ${this.greeting}, ${name}`);
    }
}


const myCustomEmitter = new MyCustomEventEmitter();

myCustomEmitter.on('greeting',(input)=>{
    console.log('Greeting event ',input);
} )

myCustomEmitter.greet('Prakhar Singh'); 