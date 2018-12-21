import React from 'react';
import Stars from './Stars.jsx';

const SuggestionListEntry = (props) => {
  return (
    <div>
      <img src={props.restaurant.picture} />
      <h3>{props.restaurant.name}</h3>
      <p>{props.restaurant.food}</p>
      <p>{props.restaurant.waiting_time} mins</p>
      <p>${props.restaurant.minimum} min</p>
      <p>{props.restaurant.review_no} ratings</p>
      <Stars stars={props.restaurant.review_summary.stars}/>
    </div>
  );
};

export default SuggestionListEntry;
