import {Route, Navigate, useLocation, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";


const  PrivateRoute=({ children, ...rest }) =>{
    const auth = useSelector(state => state.user.loginSuccess)

    console.log(auth)



        return auth ? <Outlet /> : <Navigate to="/login" />;

}

export default PrivateRoute