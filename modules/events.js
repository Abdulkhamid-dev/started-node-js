const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('eventName', () => {
  console.log('Hello world an event occured');
});
myEmitter.emit('eventName');