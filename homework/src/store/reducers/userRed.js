import { GET_USERS_SUCCESS } from "../actions/userAct";
import { GET_USERS_ERROR } from "../actions/userAct";

const initialState = {
    usersData: [],
    errorMessage: ""
};

export const userReducer = (state = initialState , action) =>{
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                usersData: [...action.payload],
                errorMessage: ""
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                usersData: [],
                errorMessage: action.payload
            }
        default:
            return state
            
    };
};