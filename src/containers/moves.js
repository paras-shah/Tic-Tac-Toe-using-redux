import React, { Component } from 'react';
import {connect} from 'react-redux';


class Moves extends Component {
 
  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return (state);
}

export default connect(mapStateToProps)(Moves);

