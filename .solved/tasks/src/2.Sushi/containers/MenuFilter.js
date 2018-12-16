import React from 'react';
import { connect } from 'react-redux';
import { changeProductTag } from '../actionCreators';
import MenuFilter from '../components/MenuFilter';

export default connect(
  (state, props) => ({
    chosenTags: state.chosenProducts.tags
  }),
  (dispatch, props) => ({
    onChange: productTag => dispatch(changeProductTag(productTag))
  })
)(MenuFilter);
