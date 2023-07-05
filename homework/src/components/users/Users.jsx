import React, { useEffect } from 'react';
import "./users.css"
import { useDispatch , useSelector } from "react-redux";
import { getUsers } from '../../store/actions/userAct';
import  UserItem from "./userItem/UserItem"

const Users = () => {
 const dispatcher = useDispatch();
 const userState = useSelector((state)=>state.usData)

 useEffect(()=>{
  dispatcher(getUsers())
  
},[])

 const { usersData , errorMessage } = userState

 if(errorMessage){
  return <p>{errorMessage}</p>
 }else{
return (
    <div className='usersContainer'>
      {
        usersData.map((user,idx) =>{
          return <UserItem usName={user.name} usObj={user} key={idx}></UserItem>
        })
      }
    </div>
  )
}
}

export default Users