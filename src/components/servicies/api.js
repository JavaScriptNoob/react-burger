import React from "react";
import data from "../utils/data";

export const _QUERY = "https://norma.nomoreparties.space/api/"
export const _INGREDIENTS = "ingredients"
export const _ORDERS = "orders"


export const getProductData = async (query, setter, state, endpoint) => {
    setter({...state, error: false, confirmation: false});
    fetch(`${_QUERY}${endpoint}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json()
        })
        .then(item => setter({...state, data: item.data, confirmation: true}))
        .catch(e => {
            setter({...state, error: true, confirmation: false});
        })
}

export const postProductData = async (arr, setter, errSetter) => {

    await fetch("https://norma.nomoreparties.space/api/orders", {
        method: "post", headers: {"Content-Type": 'application/json'}, body: JSON.stringify(arr)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        }).then((item) => {
            console.log(item, "mghjmhjmhjmjhm")
            setter(item.order.number)
        })
        .catch(e => {
            console.log(e)
            errSetter(e);
        })
}