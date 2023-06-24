import React, {useState, FC,  SyntheticEvent} from 'react'
import Modal from "../modal/modal";
import {
    Tab
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingrediens.module.css'
import IngredientDetails from "../ingredients-details/ingredient-details";
import {useSelector} from "../servicies/customHooks/typeHooks";
import {IngredientItem} from "./ingredient-item";
import {coordAxel} from "../utils/coordAxel";
import {selectorModalIngredients, selectorProducts} from "../servicies/selectors";
import { IItem} from "../utils/types";
const BurgerIngredients: FC = () => {
    const data = useSelector(selectorProducts)
    const modal = useSelector(selectorModalIngredients)
    const [current, setCurrent] = useState<string>('bun')

    console.log(data)

    const scrollHandler = (evt: SyntheticEvent) => {
        evt.target.addEventListener('scroll', function () {
            setCurrent(coordAxel(styles.containerGeneral))
        });
    }
    const setScroll = (type: string) => {

        setCurrent(type)
        // @ts-ignore
        document.querySelector(`#${type}`).scrollIntoView({block: "start", behavior: "smooth"})
    }
    return (
        <div className={styles.containerGeneral}>
            {modal && <Modal confirm={modal} onClose={undefined}>
                <IngredientDetails/>
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
                                {data.map((item: IItem) => (item.type === 'bun' &&
                                    <IngredientItem key={item._id} data={item}/>))
                                }</div>
                            <h2 id="sauce" className="mb-6 text text_type_main-medium">
                                Соусы
                            </h2>
                            <div className={styles.wrapper}>
                                {data.map((item: IItem) => (
                                    item.type === 'sauce' &&

                                    <IngredientItem key={item._id} data={item}/>))

                                }</div>
                            <h2 id="main" className="mb-6 text text_type_main-medium">
                                Начинки
                            </h2>
                            <div className={styles.wrapper}>
                                {data.map((item: IItem) => (item.type === 'main' &&
                                    <IngredientItem key={item._id} data={item}/>))
                                }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BurgerIngredients;

