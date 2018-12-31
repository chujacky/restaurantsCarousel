import React from 'react';
import styled from 'styled-components';

const BookmarkButton = styled.button`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,.1);

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;


class Bookmark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmarked: this.props.bookmarked,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      bookmarked: !this.state.bookmarked,
    });
  }

  render() {
    const bookmarkFill = this.state.bookmarked === true ? '#faae1d' : '#b1b4b5';

    return (
      <BookmarkButton type="button" onClick={this.onClick} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 -5 32 32" width="32px" height="32px">
          <path d="M 5 2.98 v 18.1 L 12 16 l 7 5.08 V 2.98 H 5 Z m 0 0" fill={bookmarkFill} />
        </svg>
      </BookmarkButton>
    )
  }
};

export default Bookmark;
