/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes'), http = require('http'), path = require('path');
var bodyParser = require("body-parser");

var app = express();

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
	secret : 'parkwizsession',
	cookie : {
		maxAge : 180000
	}
}));

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/bigdata', routes.bigdata);
app.get('/iot', routes.iot);
app.get('/mobile', routes.mobile);
app.get('/management', routes.management);
app.get('/location',routes.location);
app.get('/contactus',routes.contactus);
app.get('/codeofconduct',routes.codeofconduct);
app.get('/businessprocess',routes.businessprocess);
app.get('/blog', routes.blog);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});






app.post('/api/download',function(req,res){
		routes.addEntry(req, res, req.body);
});