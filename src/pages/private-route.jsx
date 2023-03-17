import {Route, Navigate, useLocation, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const  PrivateRoute=({ children, ...rest }) =>{
    const auth = useSelector(state => state.user.userToken)
    const [domIsReady,setDomIsReady] =useState(false);
    useEffect(() => {
        setDomIsReady(true)
    }, []);

    console.log(auth)
    const token = localStorage.getItem('refresh')
    console.log(token,10000000000)

    return auth || token ? <Outlet /> : <Navigate to="/login" />;


}

export default PrivateRoute