import React from 'react';
import SuggestionListEntry from './SuggestionListEntry.jsx';
import styles from './style.css.js';

const SuggestionList = (props) => {
  return (
    <div style={styles.list}>
      {props.restaurants.map((restaurant) => {
        return <SuggestionListEntry restaurant={restaurant[0]} />
      })}
    </div>
  );
};

export default SuggestionList;
