import {connect} from "react-redux";
import MenuFilter from "../components/MenuFilter";
import {changeProductTag} from "../actionCreators";

export default connect(
    (state, props) => ({
        chosenTags: state.chosenProducts.tags
    }),
    (dispatch, props) => ({
        onChange: value => dispatch(changeProductTag(value))
    })
)(MenuFilter);
