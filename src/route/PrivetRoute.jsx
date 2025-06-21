import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    console.log(location.pathname);
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(!user){
        return <Navigate to={"/login"} state={location.pathname}></Navigate>
    }
    return children
};

export default PrivetRoute;