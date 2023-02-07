import React from 'react'

import {
    Tab,
    ConstructorElement,
    Counter, DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'

class BurgerConstructor extends React.Component {


    render() {

        return (
            <aside className={ styles.scrollContainer } >
                <ul style={{display:"flex", flexWrap: "wrap", margin: "auto",width:'100%'}}>
                    {this.props.data.map(item => (
                        <li className="mt-4">
                            <div className={styles.constructorElement}>
                                <i className="pr-3">
                                    <DragIcon type='primary' />
                                </i>


                                <ConstructorElement
                                    text={item.name}
                                    thumbnail={item.image}
                                    price={item.price}/>
                            </div>
                        </li>


                    ))}
                </ul>
            </aside>
        )
    }
}

export default BurgerConstructor;
