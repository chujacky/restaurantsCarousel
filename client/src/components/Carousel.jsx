import React from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
import styles from './style.css.js';
import styled from 'styled-components';

const CarouselBody = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow: auto;
  display: flex;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

`;

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
      <CarouselBody className="carouselBody" ref={props.scroll}>
        {props.restaurants.map((restaurant, index) => {
          return (
            <RestaurantEntry restaurant={restaurant} active={props.active} index={index % 3}
            hoverIn={props.hoverIn} hoverOut={props.hoverOut} hover={props.hover}/>
          );
        })}
      </CarouselBody>
    </div>
  );
};

export default Carousel;
