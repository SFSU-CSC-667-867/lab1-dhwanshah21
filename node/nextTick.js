setImmediate(() => console.log('Now'));
process.nextTick(() => console.log('Hello'));
// next event on the queue
// finishes first and then gives the priority to the next tick
console.log('world');
