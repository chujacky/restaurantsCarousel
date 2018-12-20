const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grubhub');


const suggestionSchema = new mongoose.Schema({
  name: String,
  address: String,
  waiting_time: Number,
  minimum: Number,
  review_no: Number,
  review_summary: Object,
  picture: String,
  bookmarked: Boolean,
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

const kfc = new Suggestion({
  name: 'kfc',
  address: 'SF',
  waiting_time: 20,
  minimum: 0,
  review_no: 200,
  review_summary: { stars: 4 },
  picture: 'kfc uncle',
  bookmarked: false,
});

kfc.save((err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
