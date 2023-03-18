import {Route, Navigate, useLocation, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
const  PrivateRoute=({ children, ...rest }) =>{
    const auth = useSelector(state => state.user.userToken)
    const [domIsReady,setDomIsReady] =useState(false);
    useEffect(() => {
        setDomIsReady(true)
    }, []);
    const token = localStorage.getItem('refresh');
    return auth || token ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;