import React from 'react';
import Stars from './Stars.jsx';
import styles from './style.css.js';

const SuggestionListEntry = (props) => {
  console.log(props.restaurant)
  return (
    <div style={styles.listEntry}>
      <img style={styles.image} src={props.restaurant.picture} />
      <h3 style={styles.listInfoLeft}>{props.restaurant.name}</h3>
      <div style={styles.listInfoLeft}>
        <span>{props.restaurant.food}</span>
      </div>
      <div style={styles.lowerRow}>
        <div style={styles.listInfoLeft}>
          <span>
            <div>{props.restaurant.waiting_time} mins</div>
            <div>${props.restaurant.minimum} min</div>
          </span>
        </div>
        <div style={styles.listInfoRight}>
          <div>{props.restaurant.review_no} ratings</div>
          <Stars stars={props.restaurant.review_summary.stars}/>
        </div>
      </div>
    </div>
  );
};

export default SuggestionListEntry;
