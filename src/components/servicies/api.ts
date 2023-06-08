import React from "react";
import { storeCookie } from "./jwt";

export const _QUERY = "https://norma.nomoreparties.space/api/";

export const errorHandling = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
