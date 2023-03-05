import React, {useEffect,useRef, useState, useContext, useReducer} from 'react'
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
    LockIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import {useDrag,useDrop} from "react-dnd";


const ConstructorItems=({data,handleClose,id, index,moveItemInsideContainer})=>{

    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: 'constructor',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(data, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = data.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveItemInsideContainer(dragIndex, hoverIndex)

            data.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: 'constructor',
        item: () => ({ id: data.id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))


    return( <li className="mt-4" key={data._id} ref={ref}>
        <div className={styles.constructorElement}

        >
            <i className="pr-3">
                {
                    data.type === "bun" ?
                        <LockIcon type="primary"/>
                        : <DragIcon type='primary'/>}
            </i>
            <ConstructorElement data-handler-id={handlerId}
                text={data.name}
                thumbnail={data.image}
                price={data.price}
                handleClose={()=>handleClose(data._id)}
            />
        </div>
    </li>)


}
export default ConstructorItems