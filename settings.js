
var fs = require('fs');

var httpsOptions = {
  key: fs.readFileSync('path-to-key-file'),
  cert: fs.readFileSync('path-to-cert-file')
};

var portNumber = 8000;

module.exports = {
  httpsOptions: httpsOptions,
  portNumber: portNumber
}
