import React from 'react';
import SuggestionListEntry from './SuggestionListEntry.jsx';

const SuggestionList = (props) => {
  return (
    <div>
      {props.restaurants.map((restaurant) => {
        return <SuggestionListEntry restaurant={restaurant[0]}/>
      })}
    </div>
  );
};

export default SuggestionList;
