import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import styles from './style.css.js';


class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      restaurants: [],
      hover: 0,
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  componentDidMount() {
    axios.get(`/restaurants/${this.props.id}/suggestions`)
      .then((response) => {
        const data = response.data.map(restaurant => restaurant[0]);
        this.setState({
          restaurants: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  next() {
    // const active = this.state.active === 3 ? this.state.active : this.state.active + 1;
    // this.setState({
    //   active,
    // });
  }

  back() {
    const active = this.state.active === 0 ? this.state.active : this.state.active - 1;
    this.setState({
      active,
    });
  }

  hoverIn(id) {
    console.log(id);
    this.setState({
      hover: id,
    });
  }

  hoverOut() {
    console.log('out');
    this.setState({
      hover: 0,
    });
  }

  render() {
    return (
      <Carousel restaurants={this.state.restaurants} next={this.next} back={this.back}
        active={this.state.active} hover={this.state.hover} 
        hoverIn={this.hoverIn} hoverOut={this.hoverOut} scroll={this.scroller} />
    );
  }
}

export default Suggestions;
