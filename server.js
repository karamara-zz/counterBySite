var express= require('express'),
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/client"));
app.use(express.static(__dirname));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//server
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	console.log('listening the port : 8000')
})
