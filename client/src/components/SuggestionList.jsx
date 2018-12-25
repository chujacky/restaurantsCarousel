import React from 'react';
import SuggestionListEntry from './SuggestionListEntry.jsx';
import styles from './style.css.js';

const SuggestionList = (props) => {
  console.log(props.active === props.index);
  const style = props.active === props.index ? styles.listActive : styles.list;
  return (
    <div style={style} className="lists">
      {props.restaurants.map((restaurant) => {
        return <SuggestionListEntry restaurant={restaurant[0]} />
      })}
    </div>
  );
};

export default SuggestionList;
