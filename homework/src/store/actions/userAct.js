 export const GET_USERS_SUCCESS = "GET USERS SUCCESS";
 export const GET_USERS_ERROR = " GET USSERS ERROR";

const usersActionSuccess = (payload) => ({
    type:GET_USERS_SUCCESS,
    payload
});

const usersActionError = (payload) => ({
    type:GET_USERS_ERROR,
    payload
});


 export const getUsers = ()=>{
    return async (dispatcher) =>{
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        dispatcher(usersActionSuccess(data))
    } catch (error) {
        dispatcher(usersActionError("Sorry , something went wrong !!!"))
        
    };
};
};