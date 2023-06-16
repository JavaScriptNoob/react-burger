import { FC } from 'react';
import styles from '../feedDetails/feed-details.module.css';
import { useSelector, useDispatch } from '../servicies/customHooks/typeHooks';
import {ISocketDataOrder} from "../utils/types";
import {RootState} from "../servicies/reducers/index-reducer";
const FeedTable: FC = () => {
    const { orders, total, totalToday } = useSelector((state:RootState) => state.feed);

    return (
        <div className={  `ml-15 ${styles.feed_info}`}>
            <div className={`mb-15 ${styles.feed_numbers}`}>
                <div className={`mr-9 ${styles.feed_numbers_item}`}>
                    <p className="mb-6 text text_type_main-medium">
                        Готовы:
                    </p>
                    <ul className={`text text_type_digits-default ${styles.feed_numbers_list} ${styles.feed_numbers_in_process}`}>
                        {
                            orders.filter((order: ISocketDataOrder) => order.status === "done")
                                .map((order: ISocketDataOrder) =>
                                    (<li className={`${styles.feed_numbers_list_item}`} key={order._id}>{order.number}</li>)
                                )
                        }
                    </ul>
                </div>
                <div className={`${styles.feed_numbers_item}`}>
                    <p className="mb-6 text text_type_main-medium">
                        В работе:
                    </p>
                    <ul className={`text text_type_digits-default ${styles.feed_numbers_list}`}>
                        {
                            orders.filter((order: ISocketDataOrder) => order.status !== "done")
                                .map((order: ISocketDataOrder) => (<li className={`${styles.feed_numbers_list_item}`} key={order._id}>{order.number}</li>))
                        }
                    </ul>
                </div>
            </div>
            <div className="mb-15">
                <p className="text text_type_main-medium">Выполнено за все время:</p>
                <div className="text text_type_digits-large">
                    {total}
                </div>
            </div>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <div className="text text_type_digits-large">
                {totalToday}
            </div>
        </div >
    );
}


export default FeedTable;
