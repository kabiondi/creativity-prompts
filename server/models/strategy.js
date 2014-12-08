var mongoose = require('mongoose');
var Schema = new mongoose.Schema({ prompt: 'string' });

module.exports = mongoose.model('Strategy', Schema);