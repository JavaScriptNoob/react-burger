import {Route, Navigate, useLocation, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {FC, useEffect, useState} from "react";
const  PrivateRoute:FC=() =>{
    const auth = useSelector((state:any) => state.user.userToken)
    const [domIsReady,setDomIsReady] =useState(false);
    useEffect(() => {
        setDomIsReady(true)
    }, []);
    const token = localStorage.getItem('refresh');
    return auth || token ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;