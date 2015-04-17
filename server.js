var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/webhook', secret: 'oath' });

var port = process.env.PORT || 3420;
app.listen(port);

function handler (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}

io.on('connection', function (socket) {
  console.log('connected');
});

handler.on('error', function (err) {
  console.error('Error:', err.message)
});

handler.on('pull_request', function (event) {
  console.log('pull_request');
  // if (event.payload.action === 'opened') {
    console.log('emitting pull request to sockets');
    io.emit('pull');
  // }
});
