var express						= require('express');
var app							= express();
var bodyParser					= require('body-parser');
var mongoose					= require('mongoose');
var strategiesController 	= require('./server/controllers/strategies-controller');
var slideshowCtrl 			= require('./server/controllers/slideshow-controller');
var morgan						= require('morgan');

mongoose.connect('mongodb://localhost:27017/quote_banks');

app.use(bodyParser());
app.use(morgan('dev'));

app.get('/', function (req, res) {
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

var port = process.env.PORT || 8000;

app.listen(port, function() {
	console.log('Hello. Tell me to do something...');
});