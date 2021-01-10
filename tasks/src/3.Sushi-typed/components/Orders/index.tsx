import React from 'react';
import './styles.css';
import {Link} from '@skbkontur/react-ui';
import Purchases from '../Purchases';

// ToDo (kb) перенести (!)
export interface IOrder {

}

interface IOrdersProps {
  orders?: IOrder[],
  productsStatus?: number,
  onNavigateToMenu?: () => void
}

export default function Orders({
  // TODO: добавить нужные параметры
  orders,
  productsStatus,
  onNavigateToMenu
}: IOrdersProps): JSX.Element {
  if (orders && orders.length > 0) {
    return <>{
      orders.map((order, index) =>
        <Purchases
          key={index}
          productsStatus={productsStatus}
        />
      )
    }</>
  }

  return (
    <div className="ordersMessageContainer">
      Нет заказов. Выберите что-нибудь из <Link onClick={onNavigateToMenu}>меню</Link>
    </div>
  );
}
