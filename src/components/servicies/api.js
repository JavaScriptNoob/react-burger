import React from "react";
import {storeCookie} from "./jwt";


export const _QUERY = "https://norma.nomoreparties.space/api/"

export const errorHandling =res => {
    if (!res.ok) {
        throw new Error(res.status);
    }
    return res.json()
}
