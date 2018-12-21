const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.connect('mongodb://localhost/grubhub');

const suggestionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  food: String,
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

const get = (id, callback) => {
  Suggestion.find({ id:id }, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    let restaurants = [];
    console.log(data[0].suggestions)
    for (let i = 0; i < data[0].suggestions.length; i++) {
      restaurants.push(Suggestion.find({ id: data[0].suggestions[i] }));
    }
    Promise.all(restaurants)
      .then((values) => {
        callback(null, values);
      })
      .catch((err) => {
        callback(err);
      });
  });
};

module.exports = {
  Suggestion,
  get,
};
