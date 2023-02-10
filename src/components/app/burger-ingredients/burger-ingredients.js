import React, {useState} from 'react'
import Modal from "../modal/modal";
import {Tab,
    ConstructorElement,
    Counter, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingrediens.module.css'
import data from "../../utils/data";

const BurgerIngredients =(props)=> {


    const[modal, setModal]=useState(false)
    const [itemsData,setItemsData] = useState([]);
    const targetHandling  =(currenItem,e)=>{


        console.log(currenItem)
        setModal(true)
        setItemsData(currenItem)
    }


        return (

            <div className={styles.containerGeneral}>

                <div className={styles.containerMain} style={{position:"relative"}}>
                        <Modal data={itemsData}/>
                    <div className={styles.containerSub}>
                        <div className={styles.containerTitle}>
                            <h1 className="text text_type_main-large">Соберите бургер</h1>
                        </div>
                        <div className={styles.containerSubTitle}>
                            <div  className={styles.scrollContainer}> <div style={{ display: 'flex' }}>
                                <Tab value="bun"  >
                                   Булки
                                </Tab>
                                <Tab value="sauce" >
                                    Соусы
                                </Tab>
                                <Tab value="mainS" >
                                   Начинки

                                </Tab>
                            </div> <h2>Булки</h2>
                                <div style={{display:"flex", flexWrap:"wrap"}}>{props.data.filter((item) => item.type ===('bun')).map((bunItem,index) => (
                                    <div key={index} onClick={(e) => targetHandling(bunItem, e)}>
                                        <div>

                                            <div className= {"pl-4 pr-4 pb-1 pt-6 " +styles.counterRelative}>
                                                <img src={bunItem.image} alt=""/>
                                                <Counter count={1} size="default" extraClass="m-1" />
                                            </div>

                                            <div style={{display:"flex", justifyContent:"center"}}><p>
                                                {bunItem.price}
                                                <i className="pl-2"><CurrencyIcon className="pl-3" type='primary'/></i>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}</div>

                                <h2>Соусы</h2>
                                <div style={{display:"flex",flexWrap:"wrap"}}>{props.data.filter(item => item.type ===('sauce')).map((sauceItem,index) => (
                                    <div key={index+1}>
                                        <div>
                                            <div className= {"pl-4 pr-4 pb-1 pt-6 " +styles.counterRelative}>
                                                <img src={sauceItem.image} alt=""/>
                                                <Counter count={1} size="default" extraClass="m-1" />
                                            </div>

                                            <div className={styles.price}><p style={{display:"flex", justifyContent:"center"}}>
                                                {sauceItem.price}
                                                <i className="pl-2"><CurrencyIcon  type='primary'/></i>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}</div>
                                <h2>Начинки</h2>
                                <div style={{display:"flex",flexWrap:"wrap"}}>{props.data.filter(item => item.type ===('main')).map((mainItem,index) => (
                                    <div key={index+1}>
                                        <div>
                                            <div className= {"pl-4 pr-4 pb-1 pt-6 " +styles.counterRelative}>
                                                <img src={mainItem.image} alt=""/>
                                                <Counter count={1} size="default" extraClass="m-1" />
                                            </div>

                                            <div className={styles.price}><p style={{display:"flex", justifyContent:"center"}}>
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


export default BurgerIngredients;
