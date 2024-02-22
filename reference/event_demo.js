const EventEmitter = require("events");

// Create Emitter Class
class MyEmitter extends EventEmitter {}

// Initialise Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on("event", () => console.log("Event Fired"));

// Initialise Event
myEmitter.emit("event");
