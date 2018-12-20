const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/suggestions');

const suggestionSchema = new mongoose.schema({
  name: STRING,
  address: STRING,
  waiting_time: INTEGER,
  minimum: INTEGER,
  review_no: INTEGER,
  review_summary: MIXED,
  picture: STRING,
  bookmarked: BOOLEAN 
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

