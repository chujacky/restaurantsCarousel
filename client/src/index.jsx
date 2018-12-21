import React from 'react';
import ReactDOM from 'react-dom';
import Suggestions from './components/Suggestions.jsx';

const id = window.location.pathname.substring(13);

ReactDOM.render(<Suggestions id={id}/>, document.getElementById('main'));
