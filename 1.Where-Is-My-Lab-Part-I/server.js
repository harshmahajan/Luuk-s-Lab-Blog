var express = require('express'),
    app = module.exports = express.createServer();

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


app.listen(80);
