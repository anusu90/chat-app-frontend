import { Route ,useHistory} from 'react-router-dom'
import React, {useContext } from 'react'
import { AppContext } from '../contextService/contextservice'

export default function ProtectedRoute({component:Component, ...rest}){
    let context = useContext(AppContext);
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;
    let history = useHistory();

    if(userState){
        return (
            <Route component={Component} {...rest}></Route>
        )
    } else {
        
        history.push("/")
        return ( <div></div> )

    }



}

