import React from 'react';
import { connect } from 'react-redux';
import Pages from '../components/Pages';

export default connect(
  (state, props) => ({
    page: state.page
  }),
  (dispatch, props) => ({})
)(Pages);
