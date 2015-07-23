# xerver-test
## Example test wrapper for xerver app module
A simple example of a test wrapper for an **xerver** app.  

This package adds a Express router module and an API to the **xerver** core for the **xerver-app** module.  The purpose of this package is to provide an example of the basic structure of an **xerver** test wrapper.

## Basic use
### Configuration
See the sections **Certificate for HTTPS SSL/TLS** and **Environment variables** in the **xerver** package for how to provide this info to a standalone test wrapper.

### Starting the server standalone
The **xerver-test** test wrapper application can be started with the command:
```
$ node index.js
```
The test wrapper starts the Express server in the core **xerver** package.

### HTTP Tests
The basic server and API to get the Node.js server version can be tested using the following cURL commands:
```
# public static endpoint test
curl -i -k -X GET http://localhost:3000 -H "Content-Type: application/json" \
     -u <id_string>:<token_string>

# trigger for default route
curl -i -k -X GET http://localhost:3000/x -H "Content-Type: application/json" \
     -u <id_string>:<token_string>

# public nodejsutils app static endpoint test
curl -i -k -X GET http://localhost:3000/xerver-app/1.0/nodejsutils/index.html -H "Content-Type: application/json" \
     -u <id_string>:<token_string>

# nodeversion endpoint test
curl -i -k -X GET http://localhost:3000/xerver-app/nodeversion -H "Content-Type: application/json" \
     -u <id_string>:<token_string>
```

## Using an external app
This example **xerver-test** test wrapper uses an external **xerver-app** app to provide the handler `function()` required by the Express `app.use()` and `route.use()` methods in the `api.js` module described here:
```
http://expressjs.com/4x/api.html#app.use
http://expressjs.com/4x/api.html#router.use
```
The app static page folder and module with the javascript `function()` handlers are `require`'d in the `api.js` module as
```
var xerverappdir = require('xerver-app/dirname.js')
  , nodeversion = require('xerver-app/1.0/nodejsutils/nodeversion.js').run;
```

## Notes
The **xerver** package and **xerver-app** can be added manually, rather than as a dependency specified in `package.json` using the procedure described here: [https://docs.npmjs.com/cli/link](https://docs.npmjs.com/cli/link).
