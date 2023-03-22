import React from "react";
import {storeCookie} from "./jwt";


export const _QUERY = "https://norma.nomoreparties.space/api/"

// export const errorHandling =res => {
//     console.log(res)
//     if (!res.ok) {
//         console.log(res,res.status,res)
//         throw new Error(res.status);
//
//     }
//
//     return res.json()
//
// }
// export const errorHanlin =res => {
//     if (!res.ok) {
//         console.log(Error(res.status),res)
//         throw new Error(res.status);
//
//     }
//     console.log(res.json())
//     return res.json()
// }
export const errorHandling  = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};