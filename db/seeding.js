const mongoose = require('mongoose');
const {Suggestion} = require('./index.js');
const faker = require('faker');

for (let i = 1; i < 101; i++) {
  let suggestions = [];
  for (let j = 0; j < 12; j++) {
    suggestions.push(faker.random.number(100));
  }
  const restaurant = new Suggestion({
    id: i,
    name: faker.company.companyName(),
    food: faker.lorem.words(),
    waiting_time: faker.random.number(60),
    minimum: faker.random.number(15),
    review_no: faker.random.number(2000),
    review_summary: {
      stars: faker.random.number(5),
      good: faker.random.number(100),
      onTime: faker.random.number({
        min: 60,
        max: 100,
      }),
      accurate: faker.random.number({
        min: 70,
        max: 100,
      }),
    },
    review: {
      username: faker.name.firstName(),
      review: faker.lorem.sentence(),
    },
    picture: faker.image.food(),
    suggestions,
    bookmarked: faker.random.boolean(),
  });
  restaurant.save();
}
