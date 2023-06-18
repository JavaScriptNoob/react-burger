import { FC } from 'react';
import {  Link, useLocation} from "react-router-dom";
import {ISocketDataOrder} from "../utils/types";
import {useSelector} from "../servicies/customHooks/typeHooks";
import {IItem} from "../utils/types";
import {getOrderDate, getOrderPrice} from "../servicies/jwt";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order.module.css'
const Order: FC<ISocketDataOrder> = ({ _id, number, createdAt, name, ingredients }) => {

    const location = useLocation();

    const allIngridients = useSelector((state) => state.productsData.orders);
    const stateForTo =  { background: location, id: _id }
    const path =
        location.pathname === "/feed"
            ? `/feed/${_id}`
            : `/profile/orders/${_id}`;

    const ingredientsObjects = ingredients.map((id: string) => allIngridients.filter((item: IItem) => item._id === id)).flat();

    const uniqIngredientsObjects = ingredientsObjects.reduce((acc: IItem[], item: IItem) => {
        if (acc.includes(item)) {
            return acc;
        }
        return [...acc, item];
    }, []);

    return (
        <Link
            to={path}
            state={stateForTo}
            className={`mb-4 p-6 ${styles.order_item}`}>
            <div className={`mb-6 ${styles.order_item_header}`}>
                <p className='text text_type_digits-default'>{`#${number}`}</p>
                <p className="text text_type_main-default text_color_inactive">{getOrderDate(createdAt)}</p>
            </div >
            <h3 className={`mb-6 text text_type_main-medium ${styles.order_title} `}>{name}</h3>
            <div className={`${styles.order_ingridients}`}>
                <ul className={`${styles.order_ingridients_images}`}>
                    {uniqIngredientsObjects
                        .slice(0, 6)
                        .map((ingredientsObject: IItem, index: number) =>
                            (
                                <li key={ingredientsObject._id}
                                    className={`text text_type_digits-default ${styles.order_ingridients_image}  ${index === 5 && uniqIngredientsObjects.length > 6 ? styles.order_ingridients_image_last : ''}`}
                                    style={{
                                        backgroundImage: `url(${ingredientsObject.image})`,
                                        zIndex: 6 - index
                                    }}
                                >
                                    {index === 5 && uniqIngredientsObjects.length > 6 && `+${uniqIngredientsObjects.length - 6}`}
                                </li>
                            ))}
                </ul>
                <div className={`text text_type_digits-default ${styles.order_item_price} `}>
                    {getOrderPrice(ingredientsObjects)}
                    <div className={`ml-2 pt-2`}>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link >
    );
}

export default Order;
