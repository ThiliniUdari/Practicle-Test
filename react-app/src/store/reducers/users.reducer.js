import {RETRIEVE_USERS} from '../actions/type';

const initState = [];

const userReducer =(state = initState ,action) => {
    const {type, payload} = action;

    switch(type){
        case RETRIEVE_USERS :
            return payload;
        default:
            return state;
    }
}
export default userReducer ;
