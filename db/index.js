const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grubhub');


let suggestionSchema = new mongoose.Schema({
  name: String,
  address: String,
  waiting_time: Number,
  minimum: Number,
  review_no: Number,
  review_summary: Object,
  picture: String,
  bookmarked: Boolean 
});


let Suggestion = mongoose.model('Suggestion', suggestionSchema);

let kfc = new Suggestion ({
  name:'kfc',
  address: 'SF',
  waiting_time: 20,
  minimum: 0,
  review_no: 200,
  review_summary: {stars: 4},
  picture: 'kfc uncle',
  bookmarked: false
})


kfc.save((err, kfc) => {
  if (err) {
    return console.error(err);
  }
  console.log(kfc);
})