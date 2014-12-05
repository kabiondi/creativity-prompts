var mongoose = require('mongoose');

module.exports = mongoose.model('Strategy', {
	prompt: String
});