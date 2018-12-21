import React from 'react';
import axios from 'axios';
import SuggestionList from './SuggestionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    const id = window.location.pathname.substring(13);
    axios.get(`/restaurants/${id}/suggestions`)
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

export default App;
