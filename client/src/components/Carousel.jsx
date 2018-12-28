import React from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
import styles from './style.css.js';

const Carousel = (props) =>  {
  return (
    <div className="carousel" style={styles.carousel}>
      {props.active === 0
        ? null
        : <div style={styles.leftArrow} onClick={props.back} id="prevButton" >&lt;</div>
      }
      {props.active === 3
        ? null
        : <div style={styles.rightArrow} onClick={props.next} id="nextButton" >&gt;</div>
      }
      <div className="carouselBody" style={styles.carouselBody}>
        {props.restaurants.map((restaurant, index) => {
          return (
            <RestaurantEntry restaurant={restaurant} active={props.active} index={index}
            hoverIn={props.hoverIn} hoverOut={props.hoverOut} hover={props.hover}/>
   
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
