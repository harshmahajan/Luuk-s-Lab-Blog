var express = require('express'),
    app = module.exports = express.createServer(),
    io = require('socket.io').listen(app).set('log level', 1);

// SETUP


io.sockets.on('connection', function (socket) {
  socket.emit('refresh', true);
});


// SERVER CONFIG

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.set('view engine', 'html');
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/static'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.get('/', function(req, res) { res.redirect('/index.html'); });


// START

app.listen(80);
