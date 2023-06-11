import {errorHandling} from "./error";
import {refreshToken} from "./actions/update-token-action";

interface CookieOptions {
    path?: string;
    expires?: Date| string;
    [key: string]: any;
}

interface RefreshToken {
    access:string,
    refresh:string
}
interface ResponseData {
    features: any[];
}
export function storeCookie(name:string, value:string, options:CookieOptions = {}):void {

    options = {
        path: '/',

        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }


    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// Пример использования:
// setCookie('user', 'John', {'max-age': 1200});

export const setToken =(access:string, refresh:string)=>{
storeCookie('access',access,{'max-age': 3600});
localStorage.setItem('refresh',refresh)

}

export function getCookie(name:string) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export function deleteCookie(name:string) {
    storeCookie(name, '', { 'max-age': -1 });
}
export const fetchWithRefresh = async (url:string, options:any) => {
    try {
        const res = await fetch(url, options);
        console.log("fwr try begining", res)
        return await errorHandling(res);
    } catch (err:any) {console.log("fwr catch begining",err)
        if (err.message === "jwt expired") {
            console.log("fwr err.message === \"jwt expired begining",err.message)
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                console.log("fwr  if (!refreshData.success) begining",refreshData)
                Promise.reject(refreshData);
            }
            console.log("fwr  localStorage.setItem(\"refreshToken\", refreshData.refreshToken) begining",refreshData)
            localStorage.setItem("refresh", refreshData.refreshToken);
            let authToken = refreshData.accessToken;

            if (authToken) {
                console.log("fwr  storeCookie(\"access\", authToken) statement begining",authToken)
                storeCookie("access", authToken);
            }
            options.headers.authorization = refreshData.accessToken;
            console.log("fwr after options.headers.authorization ",refreshData)
            const res = await fetch(url, options);
            console.log("fwr errorHandling",res)
            return await errorHandling(res);
        } else {
            console.log("fwr if message not jwt expired",err)
            return Promise.reject(err);
        }
    }
};