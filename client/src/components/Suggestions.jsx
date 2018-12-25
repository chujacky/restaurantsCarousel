import React from 'react';
import axios from 'axios';
import SuggestionList from './SuggestionList.jsx';
import styles from './style.css.js';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    axios.get(`/restaurants/${this.props.id}/suggestions`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          restaurants: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <SuggestionList restaurants={this.state.restaurants} />
    );
  }
}

export default Suggestions;
