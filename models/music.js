const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const MusicSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for todo
const Music = mongoose.model('todo', MusicSchema);

module.exports = Music;