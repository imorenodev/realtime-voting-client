import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
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
