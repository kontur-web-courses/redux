import Navigation from "../components/Navigation";
import {connect} from "react-redux";
import {navigateTo} from "../actionCreators";

export default connect(
    (state, props) => ({
        page: state.page
    }),
    (dispatch, props) => ({
        onNavigate: value => dispatch(navigateTo(value))
    })
)(Navigation);
