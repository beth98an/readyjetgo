const initState = {
    username: ''
}

<<<<<<< HEAD
const reducer = (state = initState, action) =>{
    switch(action.type){
        case "SET_USERNAME":
            return {
                ...state, 
=======
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
>>>>>>> 4d7be4f5f734c7cef95ad0d2035cd30be1dea64e
                username: action.value
            }
        case "RESET":
            return initState
<<<<<<< HEAD
            
        default: 
=======

        default:
>>>>>>> 4d7be4f5f734c7cef95ad0d2035cd30be1dea64e
            return state;
    }
}

export default reducer
