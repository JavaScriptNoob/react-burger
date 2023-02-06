import React from 'react'

import {Tab,
    ConstructorElement,
    Counter, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingrediens.module.css'

class BurgerIngredients extends React.Component {


    render() {
        console.log(this.props.data)
        // const  data =[...this.props]
        // console.log(data)

        return (
            <div className={styles.containerGeneral}>

                <div className={styles.containerMain}>
                    <div className={styles.containerSub}>
                        <div className={styles.containerTitle}>
                            <h1 className="text text_type_main-large">Соберите бургер</h1>
                        </div>
                        <div className={styles.containerSubTitle}>
                            <div  className={styles.scrollContainer}> <div style={{ display: 'flex' }}>
                                <Tab value="one"  >
                                    One
                                </Tab>
                                <Tab value="two" >
                                    Two
                                </Tab>
                                <Tab value="three" >
                                    Three
                                </Tab>
                            </div> <h2>Булки</h2>
                                <div style={{display:"flex", flexWrap:"wrap"}}>{this.props.data.filter(item => item.type ===('bun')).map(bunItem => (
                                    <div>
                                        <div>
                                            <div className= {"pl-4 pr-4 pb-1 pt-6 " +styles.counterRelative}>
                                                <img src={bunItem.image} alt=""/>
                                                <Counter count={1} size="default" extraClass="m-1" />
                                            </div>

                                            <div className={styles.price}><p>
                                                {bunItem.price}
                                                <i className="pl-3"><CurrencyIcon className="pl-3" type='primary'/></i>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}</div>

                                <h2>Соусы</h2>
                                <div style={{display:"flex",flexWrap:"wrap"}}>{this.props.data.filter(item => item.type ===('sauce')).map(sauceItem => (
                                    <div>
                                        <div>
                                            <div className= {"pl-4 pr-4 pb-1 pt-6 " +styles.counterRelative}>
                                                <img src={sauceItem.image} alt=""/>
                                                <Counter count={1} size="default" extraClass="m-1" />
                                            </div>

                                            <div className={styles.price}><p>
                                                {sauceItem.price}
                                                <i className="pl-3"><CurrencyIcon className="pl-3" type='primary'/></i>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}</div>
                                <h2>Соусы</h2>
                                <div style={{display:"flex",flexWrap:"wrap"}}>{this.props.data.filter(item => item.type ===('main')).map(sauceItem => (
                                    <div>
                                        <div>
                                            <div className= {"pl-4 pr-4 pb-1 pt-6 " +styles.counterRelative}>
                                                <img src={sauceItem.image} alt=""/>
                                                <Counter count={1} size="default" extraClass="m-1" />
                                            </div>

                                            <div className={styles.price}><p>
                                                {sauceItem.price}
                                                <i className="pl-3"><CurrencyIcon className="pl-3" type='primary'/></i>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}</div>

                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <h1>Булки</h1>
                    <div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

                        </div>
                    </div>
                </div>
                <div>
                    <h1>Соберите бургер</h1>
                    <div>
                        <div>Булки</div>
                        <div>Соусы</div>
                        <div>Начинки</div>
                        <div>Начинки</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BurgerIngredients;
