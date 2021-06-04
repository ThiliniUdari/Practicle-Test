import UserDataService from '../../services/user.service'
import {RETRIEVE_USERS} from './type';


export const retrieveUsers=()=>async(dispatch)=>{
    try{
        const res = await UserDataService.getAll();
        console.log(res.data,'User Data');
        dispatch({
            type:RETRIEVE_USERS,
            payload:res.data,
           
        });
    }catch(error){
        console.log(error,"Get User data error");
    }
}