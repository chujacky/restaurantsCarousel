import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import TooltipList from './TooltipList.jsx';
import styled from 'styled-components';
import styles from './style.css.js'

const SuggestionContainer = styled.div`

  @media screen and (min-width: 768px) {
    width: 720px;
    max-width: 85%;
  }
  
  @media screen and (min-width: 992px) {
    width: 960px;
    max-width: 85%;
  }  

`;

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      restaurants: [],
      active: 0,
      hover: 0,
      position: [0, 0],
      width: 960,
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
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

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  updateWidth() {
    if (window.innerWidth < 768) {
      this.setState({
        width: 710,
      })
    } else {
      this.setState({
        width: 950,
      });
    }
  }

  next() {
    const active = this.state.active === 3 ? this.state.active : this.state.active + 1;
    this.setState({
      active,
    });
    this.scroller.current.scrollLeft += this.state.width;
  }

  back() {
    const active = this.state.active === 0 ? this.state.active : this.state.active - 1;
    this.setState({
      active,
    });
    this.scroller.current.scrollLeft -= this.state.width;
  }

  hoverIn(id, index) {
    const position = [100 + 316 * index, 300];
    this.setState({
      hover: id,
      position,
    });
  }

  hoverOut() {
    this.setState({
      hover: 0,
      position: [0, 0],
    });
  }

  render() {
    return (
        <SuggestionContainer>
          <div>
            <h3 style={ {padding: '0 20px'} }>Sponsored restaurants in your area</h3>
          </div>
          <Carousel restaurants={this.state.restaurants} next={this.next} back={this.back}
          active={this.state.active} hoverIn={this.hoverIn}
          hoverOut={this.hoverOut} scroll={this.scroller} />
          <TooltipList restaurants={this.state.restaurants} hover={this.state.hover} position={this.state.position} />
        </SuggestionContainer>
    );
  }
}

export default Suggestions;
