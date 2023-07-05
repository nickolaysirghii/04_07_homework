import { CHANGE_FAVORITE } from "../actions/favorActi";

const data = localStorage.getItem("favorites");
const dataPars = JSON.parse(data);

export const favoriteReducer = (state = dataPars , action) =>{
    if(action.type === CHANGE_FAVORITE){
        return [...action.payload]
    }else{
        return [...state]
    }
}