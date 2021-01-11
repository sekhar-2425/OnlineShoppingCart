import React,{Fragment} from 'react'
import {Link,withRouter} from "react-router-dom"
import {signout,isAuthenticated} from "../auth/helper"
import { RiShoppingCart2Line,RiHomeHeartFill,RiDashboardFill,RiAccountCircleFill } from 'react-icons/ri';
import { GoSignOut,GoSignIn } from 'react-icons/go';


const currentTab=(history,path)=>{
    if(history.location.pathname===path){
        return {color:"#2ecc72"}
    }else{
        return {color:"#FFFFFF"}
    }
}

const Menu=({history,path})=> {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                   <Link style={currentTab(history,"/")} className="nav-link" to="/">Home <RiHomeHeartFill /></Link>
                </li>
                {isAuthenticated()&&
                <li className="nav-item">
                   <Link style={currentTab(history,"/cart")} className="nav-link" to="/cart">Cart <RiShoppingCart2Line /></Link>
                </li>
                }
                {isAuthenticated()&& 
                <li className="nav-item">
                   <Link style={currentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">Dashboard <RiDashboardFill /></Link>
                </li>
                }
                {!isAuthenticated()&&(
                    <Fragment>
                        <li className="nav-item">
                        <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">Signup <RiAccountCircleFill /></Link>
                        </li>
                        <li className="nav-item">
                        <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">Signin <GoSignIn /></Link>
                        </li>
                    </Fragment>
                )}
               {isAuthenticated()&&(
                    <li className="nav-item">
                    <Link 
                    onClick={()=>{
                        signout(()=>{
                            history.push("/")
                        })
                    }}
                    className="nav-link text-warning">Signout <GoSignOut /></Link>                    
                    </li>
               )}
            </ul>
        </div>
    )
}

export default withRouter(Menu)