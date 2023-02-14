import React, {useState} from 'react'
import Modal from "../modal/modal";
import {
    Tab,
    ConstructorElement,
    Counter, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingrediens.module.css'
import IngredientDetails from "../ingredients-details/ingredient-details";
import PropTypes from "prop-types";
import dataTypeValidation from "../../utils/prop-types";

const BurgerIngredients = (props) => {


    const [modal, setModal] = useState(false)
    const [itemsData, setItemsData] = useState(null);
    const openModalIngredients = (data) => {
        setModal(true);
        setItemsData(data);

    }
    const closeModal = () => {
        setModal(false)
    }

    console.log(itemsData)

    return (

        <div className={styles.containerGeneral}>
            {modal && <Modal confirm={modal}>
                <IngredientDetails closeModal={closeModal} items={itemsData}/>
            </Modal>}

            <div className={styles.containerMain} style={{position: "relative"}}>

                <div className={styles.containerSub}>
                    <div className={styles.containerTitle}>
                        <h1 className="text text_type_main-large">Соберите бургер</h1>
                    </div>
                    <div className={styles.containerSubTitle}>
                        <div className={styles.scrollContainer}>
                            <div style={{display: 'flex'}}>
                                <Tab>
                                    Булки
                                </Tab>
                                <Tab>
                                    Соусы
                                </Tab>
                                <Tab>
                                    Начинки

                                </Tab>
                            </div>
                            <h2>Булки</h2>
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap"
                            }}>{props.data.filter((item) => item.type === ('bun')).map((bunItem, index) => (
                                <div key={props.data._id} onClick={(e) => openModalIngredients(bunItem)}>
                                    <div>

                                        <div className={"pl-4 pr-4 pb-1 pt-6 " + styles.counterRelative}>
                                            <img src={bunItem.image} alt=""/>
                                            <Counter count={1} size="default" extraClass="m-1"/>
                                        </div>

                                        <div style={{display: "flex", justifyContent: "center"}}><p>
                                            {bunItem.price}
                                            <i className="pl-2"><CurrencyIcon className="pl-3" type='primary'/></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            ))}</div>

                            <h2>Соусы</h2>
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap"
                            }}>{props.data.filter(item => item.type === ('sauce')).map((sauceItem, index) => (
                                <div key={props.data._id} onClick={(e) => openModalIngredients(sauceItem)}>
                                    <div>
                                        <div className={"pl-4 pr-4 pb-1 pt-6 " + styles.counterRelative}>
                                            <img src={sauceItem.image} alt=""/>
                                            <Counter count={1} size="default" extraClass="m-1"/>
                                        </div>

                                        <div className={styles.price}><p
                                            style={{display: "flex", justifyContent: "center"}}>
                                            {sauceItem.price}
                                            <i className="pl-2"><CurrencyIcon type='primary'/></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            ))}</div>
                            <h2>Начинки</h2>
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap"
                            }}>{props.data.filter(item => item.type === ('main')).map((mainItem) => (
                                <div key={props.data._id} onClick={(e) => openModalIngredients(mainItem)}>
                                    <div>
                                        <div className={"pl-4 pr-4 pb-1 pt-6 " + styles.counterRelative}>
                                            <img src={mainItem.image} alt=""/>
                                            <Counter count={1} size="default" extraClass="m-1"/>
                                        </div>

                                        <div className={styles.price}><p
                                            style={{display: "flex", justifyContent: "center"}}>
                                            {mainItem.price}
                                            <i className="pl-2"><CurrencyIcon className="pl-3" type='primary'/></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            ))}</div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

IngredientDetails.propTypes = {
    props: PropTypes.arrayOf(dataTypeValidation)


}
export default BurgerIngredients;
