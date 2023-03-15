import styles from "./burger-ingrediens.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {useDrag} from "react-dnd";
import {useSelector} from "react-redux";
import {selectorCurrentList} from "../servicies/reducers/selectors";
import {Link, useLocation} from "react-router-dom";

export const IngredientItem = ({openModal,data}) => {


    const {currentConstructorList, bun} = useSelector(selectorCurrentList)
    const [, ref] = useDrag({
        type: 'item',
        item: data,

    })

    const location = useLocation();
    console.log(location,"343334")
 const occurrence=   (id) => (
        [...currentConstructorList, bun].filter(function (item) {

            return item._id === id;
        }).length)

        return (

        <>
                <Link
                    to={`/ingredients/${data._id}`}
                    state={{background:location}}
                    >
                    <div className={styles.element}   // onClick={(e) => openModal(data)}//
                         >
                    <div className={styles.centered} ref={ref} >
                <div className={ styles.counterRelative}>
                    <img src={data.image} alt=""/>
                    {<Counter size="default" extraClass="m-1" count={occurrence === 0 ? 0:occurrence(data._id)}/>}
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <span className="mr-2">{data.price}</span><i className="pr-2"><CurrencyIcon className="mr-3" type='primary'/></i>
                </div>
                <p style={{textAlign:"center"}} className="m-1">{data.name}</p>
                    </div>
                    </div>
                    </Link>


        </>
    )

}

// ({data.filter((item) => item.type === ('bun')).map((bunItem, index) => (