import React, {FC, useRef} from 'react';
import {useSelector} from "../servicies/customHooks/typeHooks";
import {RootState} from "../servicies/reducers/index-reducer";
import {ISocketDataOrder} from "../utils/types";
import Order from "../order/order";
import styles from './feed-details.module.css'
const FeedDetails :FC=()=>{
    const {orders} = useSelector((state:RootState)=>state.feed)
    return(
        <div className={`mr-2 ${styles.items}`}>
            {orders.map((order: ISocketDataOrder) => (<Order key={order._id} {...order} />))}
        </div>
    )
}
export default FeedDetails;
