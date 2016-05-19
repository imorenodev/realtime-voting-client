import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

// create the 'dumb / pure' component driven by the props it receives
export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        {this.props.winner 
          // we use ref here to be able to reference the component in unit testing
          ? <Winner ref='winner' winner={this.props.winner} />
          : <Vote {...this.props} />}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

// create the 'smart / connected' component that wraps the pure component with
// app state logic in sync from the redux store
export const VotingContainer = connect(mapStateToProps)(Voting);
