import React from 'react';
import "./favorites.css"
import FavoriteItem from './favoriteItem/FavoriteItem';
import { useSelector } from "react-redux"

const Favorites = () => {

  const favorit22 = useSelector((state)=>state.favReducer);
  

  

  return (
    <div className='favoritesContainer'>
     {
      favorit22.map((fav,idx)=>{
        return <FavoriteItem key={idx}  favName={fav.name} id={fav.id}/>
      })
     }

    </div>
  )
}

export default Favorites