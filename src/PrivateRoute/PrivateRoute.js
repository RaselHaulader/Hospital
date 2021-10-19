import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth() 

    if (loading) {
        return (<h3 className="text-center my-5 fw-bold text-primary">Loading...</h3>)
    }
    return (
        <Route {...rest} render={({location})=>
            user.uid ? children : <Redirect to={{pathname:"/login",state:{from: location}}}/>
    }/>
    );
};

export default PrivateRoute;