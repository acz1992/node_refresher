const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
	log(msg) {
		// Call Event
		this.emit("message", { id: uuid.v4(), msg });
	}
}

module.exports = Logger;

// Below code was for Index to demonstrate eventEmitters in Node, via use case of loggers
/* const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener", data));

logger.log("Hello World");
logger.log("Hello Girl");
logger.log("Hello Whirl"); */
