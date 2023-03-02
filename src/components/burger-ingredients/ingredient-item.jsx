import styles from "./burger-ingrediens.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {useDrag} from "react-dnd";

export const IngredientItem = ({openModal,data}) => {
    // console.log(openModal,key, data)

    const [, ref] = useDrag({
        type: 'item',
        item: data,

    })


    return (
        <div className={styles.element}    onClick={(e) => openModal(data)}>
            <div className={styles.centered} ref={ref} >
                <div className={ styles.counterRelative}>
                    <img src={data.image} alt=""/>
                    <Counter count={1} size="default" extraClass="m-1"/>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <span className="mr-2">{data.price}</span><i className="pr-2"><CurrencyIcon className="mr-3" type='primary'/></i>
                </div>
                <p style={{textAlign:"center"}} className="m-1">{data.name}</p>
            </div>
        </div>
    )

}

// ({data.filter((item) => item.type === ('bun')).map((bunItem, index) => (