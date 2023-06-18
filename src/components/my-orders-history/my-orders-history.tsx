import {FC, useEffect} from 'react';
import Order from '../order/order';
import {useDispatch, useSelector} from "../servicies/customHooks/typeHooks";
import {WS_ORDER_HANDSHAKE_CLOSED, WS_ORDER_HANDSHAKE_START} from "../utils/wsTypes";

import {ISocketDataOrder} from "../utils/types";
import styles from './my-orders-history.module.css';
import {RootState} from "../servicies/reducers/index-reducer";
import {getCookie} from "../servicies/jwt";
import {WS_HISTORY} from "../servicies/api";

const MyOrdersHistory: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken =getCookie('withoutBearer')
        dispatch(
            { type:WS_ORDER_HANDSHAKE_START, payload:`${WS_HISTORY}?token=${accessToken}` })

        return () => {
            dispatch(
                { type:WS_ORDER_HANDSHAKE_CLOSED }
            );
        };
    }, [dispatch]);

    const { orders } = useSelector((state:RootState) => state.ordersHistory);

    return (
        <div className={styles.scrollContainer}>
        <div className={`mr-2 ${styles.items}`}>

            {orders?.map((order: ISocketDataOrder) => (<Order key={order._id} {...order} />))}
        </div></div>
    );
}


export default MyOrdersHistory;
