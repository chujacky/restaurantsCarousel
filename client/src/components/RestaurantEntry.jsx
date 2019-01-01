import React from 'react';
import Stars from './Stars.jsx';
import Bookmark from './Bookmark.jsx';
import styles from './style.css.js';


const RestaurantEntry = (props) => {
  return (
    <div className="restaurantCard" style={styles.listEntry}>
      <div style={styles.card}>
        <a href={`/restaurants/${props.restaurant.id}`} style={{ textDecoration: 'none' }}>
          <div style={styles.cardImage}>
            <img width="255" src={props.restaurant.picture} />
          </div>
        </a>
        <div style={styles.bookmark}>
          <Bookmark bookmarked={props.restaurant.bookmarked}/>
        </div>
        <a href={`/restaurants/${props.restaurant.id}`} style={{ textDecoration: 'none' }}>
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
        </a>
      </div> 
    </div>
  );
};

export default RestaurantEntry;
