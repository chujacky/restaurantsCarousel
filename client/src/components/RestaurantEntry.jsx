import React from 'react';
import Stars from './Stars.jsx';
import Tooltip from './Tooltip.jsx';
import styles from './style.css.js';

const RestaurantEntry = (props) => {
  return (
    <div className="restaurantCard" style={styles.listEntry}>
      <div style={styles.card}>
        <div style={styles.cardImage}>
          <img width="255" src={props.restaurant.picture} />
        </div>
        <div style={styles.bookmark}>
          <button type="button" style={styles.bookmarkButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 -2 32 32" width="26px" height="26px">
              <path d="M25,27l-9-6.75L7,27V4h18V27z" fill="#b1b4b5" />
            </svg>
          </button>
        </div>
        <div style={styles.cardInfo}>
          <h3 style={Object.assign({}, styles.listInfoLeft, styles.title, styles.ellipsis)}>{props.restaurant.name}</h3>
          <div style={Object.assign({}, styles.listInfoLeft, { marginBottom: '10px' })}>
            <span>{props.restaurant.food.split(' ').slice(0, 2).join(', ').concat('...')}</span>
          </div>
          <div style={styles.lowerRow}>
            <div>
              <span>
                <div style={{ color: 'black', margin: '2px 0' }}>{props.restaurant.waitingTime} mins</div>
                <div>${props.restaurant.minimum} min</div>
              </span>
            </div>
            <div onMouseEnter={() => props.hoverIn(props.restaurant.id, props.index)} onMouseLeave={props.hoverOut}>
              <Stars stars={props.restaurant.reviewSummary.stars}/>
              <div>{props.restaurant.reviewNo} ratings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantEntry;
