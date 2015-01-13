var Strategy = require('../models/strategy');


module.exports.slidesList = function (req, res) {
	Strategy.find({}, function (err, results) {
		res.json(results);
	});
}

