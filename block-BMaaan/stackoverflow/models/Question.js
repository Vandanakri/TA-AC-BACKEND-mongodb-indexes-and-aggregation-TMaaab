var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questionSchema = new Schema({
  title: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  tags: [{ type: String }],
  views: [{ type: Number, default: 0 }],
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
});
module.exports = mongoose.model('Question', questionSchema);