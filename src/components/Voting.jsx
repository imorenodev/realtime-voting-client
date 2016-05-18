import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
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
