import React from 'react';
import { connect } from 'react-redux';
import MenuFilter from '../components/MenuFilter';
import { changeProductTag } from '../actionCreators';

export default connect(
  (state, props) => ({
    chosenTags: state.chosenProducts.tags
  }),
  (dispatch, props) => ({
    onChange: productTag => dispatch(changeProductTag(productTag))
  })
)(MenuFilter);
