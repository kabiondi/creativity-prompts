var express						= require('express');
var app							= express();
var bodyParser					= require('body-parser');
var mongoose					= require('mongoose');
var uriUtil						= require('mongodb-uri');
var strategiesController 	= require('./server/controllers/strategies-controller');
var slideshowCtrl 			= require('./server/controllers/slideshow-controller');
var morgan						= require('morgan');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
					replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };  

var mongodbUri = 'mongodb://heroku_app33083228:mbptk436ieu8ue0l71ofh6q925@ds031591.mongolab.com:31591/heroku_app33083228';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, options);

app.use(bodyParser());
app.use(morgan('dev'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/app.html');
});

app.get('/slideshow', function (req, res) {
	res.sendFile(__dirname + '/client/views/app.html');
});

app.get('/edit', function (req, res) {
	res.sendFile(__dirname + '/client/views/app.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/views', express.static(__dirname + '/client/views'));

//REST API
app.get('/api/strategies', strategiesController.list);
app.get('/api/slideshow', slideshowCtrl.slidesList);

app.post('/api/strategies', strategiesController.create);
// app.post('/api/slideshow', slideshowCtrl.create);

app.delete('/api/strategies/:prompt_id', strategiesController.deletePrompt);


app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port # ' + app.get('port'));

});