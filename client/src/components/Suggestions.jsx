import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import styles from './style.css.js';


class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      active: 0,
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
    axios.get(`/restaurants/${this.props.id}/suggestions`)
      .then((response) => {
        const data = [];
        while (response.data.length) {
          data.push(response.data.splice(0, 3));
        }
        console.log(data);
        this.setState({
          restaurants: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  next() {
    this.setState({
      active: this.state.active === 3 ? this.state.active : this.state.active + 1,
    });
  }

  back() {
    this.setState({
      active: this.state.active === 0 ? this.state.active : this.state.active - 1,
    });
  }

  render() {
    return (
      <Carousel restaurants={this.state.restaurants} active={this.state.active} next={this.next} back={this.back}/>
    );
  }
}

export default Suggestions;
