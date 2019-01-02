import React from 'react';
import Stars from './Stars.jsx';
import Bookmark from './Bookmark.jsx';
import styles from './style.css.js';
import styled from 'styled-components';

const Card = styled.div`
  padding: 0 20px;
  height: auto;
  width: auto;
  box-sizing: border-box;
  max-width: 33%;
  flex: 1 0 33%;
  
  @media screen and (max-width: 740px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;


const RestaurantEntry = (props) => {
  return (
    <Card className="restaurantCard">
      <div style={styles.card}>
        <a href={`/restaurants/${props.restaurant.id}`} style={{ textDecoration: 'none' }}>
          <div style={styles.cardImage}>
            <img className="restaurantPic" width="255" src={props.restaurant.picture} />
          </div>
        </a>
        <div style={styles.bookmark}>
          <Bookmark bookmarked={props.restaurant.bookmarked}/>
        </div>
        <a href={`/restaurants/${props.restaurant.id}`} style={{ textDecoration: 'none' }}>
          <div style={styles.cardInfo}>
            <h3 className="name" style={Object.assign({}, styles.listInfoLeft, styles.title, styles.ellipsis)}>{props.restaurant.name}</h3>
            <div style={Object.assign({}, styles.listInfoLeft, { marginBottom: '10px' })}>
              <span className="cuisine">{props.restaurant.food.split(' ').slice(0, 2).join(', ').concat('...')}</span>        
            </div>
            <div style={styles.lowerRow}>
              <div>
                <span>
                  <div className="waitingTime" style={{ color: 'black', margin: '2px 0' }}>{props.restaurant.waitingTime}-{props.restaurant.waitingTime + 10} mins</div>
                  <div className="minOrder">${props.restaurant.minimum} min</div>
                </span>
              </div>
              <div onMouseEnter={() => props.hoverIn(props.restaurant.id, props.index)} onMouseLeave={props.hoverOut}>
                <Stars stars={props.restaurant.reviewSummary.stars}/>
                <div className="reviewNos">{props.restaurant.reviewNo} ratings</div>
              </div>
            </div>
          </div>
        </a>
      </div> 
    </Card>
  );
};

export default RestaurantEntry;
