import React from 'react';
import axios from 'axios';
import SuggestionList from './SuggestionList.jsx';

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
      <div>
        <SuggestionList restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default Suggestions;
