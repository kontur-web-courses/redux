import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Status from '../constants/Status';

export default connect(
    (state, props) => ({
        productIds: getProductIds(state.products, state.chosenProducts),
        productsStatus: getProductStatus(state.products, state.chosenProducts)
    }),
    (dispatch, props) => ({})
)(Menu);

function getProductStatus(products, chosenProducts) {
    // если идет загрузка — ждем
    if (
        chosenProducts.status === Status.loading ||
        products.status === Status.loading
    ) {
        return Status.loading;
    }
    // загрузка не идет, а продукты загружены — можно показывать
    if (products.status === Status.loaded) {
        return Status.loaded;
    }
    // ничего нет и не предполагается
    return Status.none;
}

function getProductIds(products, chosenProducts) {
    // если загружен список отфильтрованных продуктов — используем его
    if (products.length > 0 && chosenProducts.status === Status.loaded) {
        return chosenProducts.ids;
    }
    // если хотя бы обычный список продуктов загружен — используем его
    if (products.status === Status.loaded) {
        return products.allIds;
    }
    return [];
}
