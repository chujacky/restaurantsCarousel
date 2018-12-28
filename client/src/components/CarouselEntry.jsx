import React from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
import styles from './style.css.js';

const CarouselEntry = (props) => {
  const style = props.active === props.index ? styles.carouselEntryActive : styles.carouselEntry;
  return (
    <div style={style}>
      {props.restaurants.map((restaurant) => {
        return <RestaurantEntry restaurant={restaurant} key={restaurant.id}
        hoverIn={props.hoverIn} hoverOut={props.hoverOut} hover={props.hover}/>
      })}
    </div>
  );
}


export default CarouselEntry;