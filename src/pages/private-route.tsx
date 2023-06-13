import {Route, Navigate, useLocation, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {FC, useEffect, useState} from "react";
import {RootState} from "../components/servicies/reducers/index-reducer";
const  PrivateRoute:FC=() =>{
    const auth:string = useSelector((state:RootState) => state.user['userToken'])
    console.log(auth)
    const [domIsReady,setDomIsReady] =useState(false);
    useEffect(() => {
        setDomIsReady(true)
    }, []);
    const token = localStorage.getItem('refresh');
    console.log(auth, token)
    return auth || token ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
