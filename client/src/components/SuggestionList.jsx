import React from 'react';
import SuggestionListEntry from './SuggestionListEntry.jsx';
import styles from './style.css.js';

const SuggestionList = (props) => {
  const style = props.active === true ? styles.listActive : styles.list;
  return (
    <div style={style}>
      {props.restaurants.map((restaurant) => {
        return <SuggestionListEntry restaurant={restaurant[0]} />
      })}
    </div>
  );
};

export default SuggestionList;
