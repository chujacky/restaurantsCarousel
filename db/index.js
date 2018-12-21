const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grubhub');

const suggestionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  waiting_time: Number,
  minimum: Number,
  review_no: Number,
  review_summary: Object,
  review: Object,
  picture: String,
  suggestions: Array,
  bookmarked: Boolean,
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;
