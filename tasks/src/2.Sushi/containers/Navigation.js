import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { navigateTo } from '../actionCreators';

export default connect(
  (state, props) => ({
    page: state.page
  }),
  (dispatch, props) => ({
    onNavigate: page => dispatch(navigateTo(page))
  })
)(Navigation);
