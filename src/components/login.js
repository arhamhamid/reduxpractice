import React, { useState } from 'react'
import { login, logout } from "./store";
import { useDispatch ,useSelector} from "react-redux";

export const Login = () => {
    const [newUserName,setNewUserName] = useState('')
    const dispatch = useDispatch()

    const username = useSelector((state)=> state.user.value.username);
  return (
    <div>
        {username}
      <input type="text" onChange={(e)=>{setNewUserName(e.target.value)}} />
      <button onClick={()=>{dispatch(login({username:newUserName}))}}>login </button> 
      <button onClick={()=>{dispatch(logout())}}>logout</button>
    </div>
  )
}