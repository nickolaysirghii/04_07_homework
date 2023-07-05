import React from 'react';
import "./favorite.css"
import { useDispatch } from 'react-redux';
import { favoriteAction } from '../../../store/actions/favorActi';

const FavoriteItem = ({favName,id}) => {
  const dispatcher = useDispatch();


 const deleteItFromFav = (id)=>{
  const userString = localStorage.getItem("favorites");
  const userPars = JSON.parse(userString);
  const  userFiltered = userPars.filter((user) => user.id !== id);
  localStorage.setItem("favorites",JSON.stringify(userFiltered));
  dispatcher(favoriteAction(userFiltered))

 
 };


  return (
    <div className='userItemContainer'>
      {favName}
        <button onClick={()=>deleteItFromFav(id)}>delete from favorites</button>
    </div>
  )
}

export default FavoriteItem