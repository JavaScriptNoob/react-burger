import React, {useState, useContext, useRef} from 'react'
import Modal from "../modal/modal";
import {
    Tab,
    ConstructorElement,
    Counter, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingrediens.module.css'
import IngredientDetails from "../ingredients-details/ingredient-details";
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {useDrag} from "react-dnd";
import {IngredientItem} from "./ingredient-item";
import {coordAxel} from "../utils/coordAxel";

const BurgerIngredients = () => {
    const dispatch = useDispatch();
    const data = useSelector(state1 => state1.productsData.productsData)
    const [current, setCurrent] = React.useState('bun')

    const refBun = useRef(null);
    const refSauce = useRef(null);
    const refMain = useRef(null);


    const [modal, setModal] = useState(false)
    const [itemsData, setItemsData] = useState([]);
    const openModalIngredients = (data) => {
        setModal(true);
        setItemsData(data);
    }
    const closeModal = () => {
        setModal(false)
    }

    const scrollHandler = (evt) => {
        evt.target.addEventListener('scroll', function () {
            setCurrent(coordAxel(styles.containerGeneral))
        });
    }
    const setScroll = (type) => {
        setCurrent(type)
        document.querySelector(`#${type}`).scrollIntoView({block: "start", behavior: "smooth"})
    }

    return (

        <div className={styles.containerGeneral}>
            {modal && <Modal confirm={modal} closeModal={closeModal}>
                <IngredientDetails closeModal={closeModal} items={itemsData}/>
            </Modal>}

            <div className={styles.containerMain} style={{position: "relative"}}>
                <div className={styles.containerSub}>
                    <div className={styles.containerTitle}>
                        <h1 className="text text_type_main-large">Соберите бургер</h1>
                    </div>
                    <div className={styles.containerSubTitle}>
                        <div>
                            <Tab value="bun" active={current === 'bun'} onClick={setScroll}>
                                Булки
                            </Tab>
                            <Tab value="sauce" active={current === 'sauce'} onClick={setScroll}>
                                Соусы
                            </Tab>
                            <Tab value="main" active={current === 'main'} onClick={setScroll}>
                                Начинки
                            </Tab>
                        </div>
                        <div className={styles.scrollContainer} onScroll={scrollHandler}>


                            <h2 id="bun" className="mb-6 text text_type_main-medium">
                                Булки
                            </h2>
                            <div className={styles.wrapper}>

                                {data.map((item) => (item.type === 'bun' &&
                                    <IngredientItem openModal={openModalIngredients} key={item._id} data={item}/>))

                                }</div>
                            <h2 id="sauce" className="mb-6 text text_type_main-medium">
                                Соусы
                            </h2>
                            <div className={styles.wrapper}>

                                {data.map((item) => (item.type === 'sauce' &&
                                    <IngredientItem openModal={openModalIngredients} key={item._id} data={item}/>))

                                }</div>
                            <h2 id="main" className="mb-6 text text_type_main-medium">
                                Начинки
                            </h2>
                            <div className={styles.wrapper}>
                                {data.map((item) => (item.type === 'main' &&
                                    <IngredientItem openModal={openModalIngredients} key={item._id} data={item}/>))

                                }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BurgerIngredients;

