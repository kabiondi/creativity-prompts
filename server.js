var express			= require('express');
var app				= express();
var bodyParser		= require('body-parser');
var mongoose		= require('mongoose');
var strategiesController 	= require('./server/controllers/strategies-controller');

mongoose.connect('mongodb://localhost:27017/quote_banks');

app.use(bodyParser());

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/app.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/strategies', strategiesController.list);
app.post('/api/strategies', strategiesController.create);

app.listen(8000, function() {
	console.log('Hello. Tell me to do something...');
});