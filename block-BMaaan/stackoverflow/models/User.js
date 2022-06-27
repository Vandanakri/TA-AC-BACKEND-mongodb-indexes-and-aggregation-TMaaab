var mongoose = require('mongoose');
// const Question = require('./Question');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true, match: /@/ },
  password: { type: String, required: true },
  reputation: { type: Number, default: 0 },
  questions: { type: Schema.Types.ObjectId, ref: 'Question' },
  answers: { type: Schema.Types.ObjectId, ref: 'Answer' },
});

module.exports = mongoose.model('User', userSchema);