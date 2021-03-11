import Product from "../components/Product";
import {connect} from "react-redux";

export default connect(
    (state, props) => ({
        product: state.products.byId[props.productId]
    })
)(Product);
