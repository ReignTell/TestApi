// HelloWorldScript.js

handlers.helloWorld = function(args, context) {
    log.info("HelloWorld function called");  // Add logging to server logs
    return { message: "Hello World from Cloud Script!" };
};
