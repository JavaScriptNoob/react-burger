import {FC, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "../servicies/customHooks/typeHooks";
import styles from './order-archive.module.css';
import {WS_ORDER_HANDSHAKE_START, WS_FEED_HANDSHAKE_START} from "../utils/wsTypes";
import {useLocation} from "react-router";
import {IItem, ISocketDataOrder} from "../utils/types";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {getOrderDate, getOrderPrice} from "../servicies/jwt";

const OrderArchive: FC = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.ordersHistory);
    const location = useLocation();
    const allIngridients = useSelector((state) => state.productsData.orders);

    useEffect(() => {
        if (orders.length === 0 && location.pathname.includes('feed')) {
            dispatch(
                { type: WS_FEED_HANDSHAKE_START }
            );

        }

        if (orders.length === 0 && location.pathname.includes('profile')) {

            dispatch(
                { type: WS_ORDER_HANDSHAKE_START }
            );

        }

    }, [dispatch, location]);

    const currentOrder = useMemo(
        () => orders.find((i: ISocketDataOrder) => i._id === location.pathname.replace('/feed/', '') || i._id === location.pathname.replace('/profile/orders/', '')),
        [orders, location]);

    const ingredientsObjects = currentOrder?.ingredients.map((id: string) => allIngridients.filter((item: IItem) => item._id === id)).flat();

    const uniqIngredientsObjects = ingredientsObjects?.reduce((acc: IItem[], item: IItem) => {
        if (acc.includes(item)) {
            return acc;
        }
        return [...acc, item];
    }, []);

    const getCount = (ingredients: string[]) => {
        const quantityItems = {};
        ingredients?.reduce((item: { [key: string]: number }, el: string) => {
            item[el] = (item[el] || 0) + 1;
            return item;
        }, quantityItems);
        return quantityItems;
    };

    const numberOfIngredients = getCount(currentOrder?.ingredients);

    const counts: Array<number> = Object.values(numberOfIngredients);


    return (
        <div className="m-10 mr-10">
            <p className={`mb-10 text text_type_digits-default`}>#{currentOrder?.number}</p>
            <p className={`mb-3 text text_type_main-medium ${styles.order_info_text}`}>{currentOrder?.name}</p>
            <p className={`mb-15 text text_type_main-default ${styles.order_info_text} ${styles.order_info_text_color}`}>{currentOrder?.status === 'done' ? 'Выполнен' : 'В процессе'}</p>
            <p className={`mb-6 text text_type_main-medium ${styles.order_info_text}`}>Состав:</p>
            <ul className={`${styles.order_info_ingridients} `}>
                {uniqIngredientsObjects
                    ?.map((ingredientsObject: IItem, index: number) =>
                        (
                            <li key={ingredientsObject._id + index}
                                className={`mb-4 text text_type_main-default ${styles.order_info_ingridient} `}
                            >
                                <div className={`mr-4 ${styles.order_ingridients_image}`}
                                     style={{
                                         backgroundImage: `url(${ingredientsObject.image})`,
                                     }}
                                >
                                </div>
                                <p className={`mr-4 ${styles.order_ingridients_title}`}>{ingredientsObject.name}</p>
                                <div className={`mr-6 ${styles.order_ingridients_price}`}>
                                    <p className={`mr-2 text text_type_digits-default`}>{counts[index]}</p>
                                    <p className={`mr-2 text text_type_digits-default`}>x</p>
                                    <p className={`mr-2 text text_type_digits-default`}>{ingredientsObject.price}</p>
                                    <CurrencyIcon type="primary" />
                                </div>
                            </li>
                        ))}
            </ul>
            <div className={`mt-10 ${styles.order_info_footer}`}>
                <p className="text text_type_main-default text_color_inactive">{getOrderDate(currentOrder?.createdAt)}</p>
                <div className={`text text_type_digits-default ${styles.order_item_price}`}>
                    {getOrderPrice(ingredientsObjects)}
                    <div className={`ml-2 pt-2`}>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderArchive;
