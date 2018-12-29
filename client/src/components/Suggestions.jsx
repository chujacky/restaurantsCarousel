import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import TooltipList from './TooltipList.jsx';
import styles from './style.css.js';


class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      restaurants: [],
      active: 0,
      hover: 0,
      position: [0, 0],
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
    const active = this.state.active === 3 ? this.state.active : this.state.active + 1;
    this.setState({
      active,
    });
    this.scroller.current.scrollLeft += 924;
  }

  back() {
    const active = this.state.active === 0 ? this.state.active : this.state.active - 1;
    this.setState({
      active,
    });
    this.scroller.current.scrollLeft -= 924;
  }

  hoverIn(id, e, index) {
    const position = [100 + 308*index, 300];
    this.setState({
      hover: id,
      position,
    })
  }

  hoverOut() {
    console.log('out');
    this.setState({
      hover: 0,
      position: [0, 0],
    });
  }

  render() {
    return (
      <div style={styles.suggestion}>
        <div>
          <h3 style={{padding:'0 20px'}}>Sponsored restaurants in your area</h3>
        </div>
        <Carousel restaurants={this.state.restaurants} next={this.next} back={this.back}
        active={this.state.active} hoverIn={this.hoverIn}
        hoverOut={this.hoverOut} scroll={this.scroller} />
        <TooltipList restaurants={this.state.restaurants} hover={this.state.hover} position={this.state.position} />
      </div>
    );
  }
}

export default Suggestions;
