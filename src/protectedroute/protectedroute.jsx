import { Route ,useHistory, Redirect} from 'react-router-dom'
import React, {useContext } from 'react'
import { AppContext } from '../contextService/contextservice'

// export default function ProtectedRoute({component:Comp}){
export default function ProtectedRoute({component:Component,data, ...rest}){

    // console.log(Component)

    let context = useContext(AppContext);
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;
    let history = useHistory();

    console.log("PR",rest)


    return ( 
        (userState)?<Route {...rest} render = {(props)=> {return <Component {...props}{...data}/>}}></Route>: <Redirect to ="/login"/>
    )



}

