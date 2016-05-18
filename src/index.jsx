import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import './styles.css';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting 
    pair={pair} 
    hasVoted={'Trainspotting'} 
    winner='Trainspotting' />,
  document.getElementById('app')
);
