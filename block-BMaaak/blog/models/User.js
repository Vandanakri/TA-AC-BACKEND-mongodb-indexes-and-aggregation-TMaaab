var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user Schema
var userSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: { 
    city: String,
    state: String,
    country: String,
    pin: Number
   },

})

userSchema.index({ username:1, email: -1 });
userSchema.index({ 'address.state': 1, 'address.country': 1 },{unique: true});

//article Schema

var articleSchema = new Schema ({
  title: String,
  description: String,
  tags: [String]
})

articleSchema.index({ tags: 'text' });
articleSchema.index({ title: 'text' });


module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", articleSchema);


