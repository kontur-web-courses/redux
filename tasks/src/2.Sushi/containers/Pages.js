import Pages from "../components/Pages";
import {connect} from "react-redux";

export default connect(
    (state, props) => ({
        page: state.page
    })
)(Pages);
