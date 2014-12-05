var Strategy = require('../models/strategy');

module.exports.create = function (req, res)  {
	var strategy = new Strategy(req.body);
	strategy.save(function (err, result) {
		res.json(result);
	});
}

module.exports.list = function (req, res) {
	Strategy.find({}, function (err, results) {
		res.json(results);
	});
}