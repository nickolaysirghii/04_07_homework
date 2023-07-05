import React from 'react';
import "./userItem.css";
import { useDispatch } from 'react-redux';
import { favoriteAction } from '../../../store/actions/favorActi';


const UserItem = ({usName,usObj}) => {

  const dispatcher = useDispatch()

   let Favorites = [];
  const favoriteUser = ()=>{

   const favorite = localStorage.getItem("favorites")
   if(favorite){
     Favorites = JSON.parse(favorite)
     const add = [...Favorites,usObj]
     localStorage.setItem("favorites",JSON.stringify(add));
     dispatcher(favoriteAction(add))
   }else{
    localStorage.setItem("favorites",JSON.stringify([usObj]));
    dispatcher(favoriteAction([usObj]))
   }


   }

   

  return (
    <div className='userItemContainer'>
        
    {usName}

    <button onClick={favoriteUser}>Add to favorite</button>

    </div>

  )
}

export default UserItem