import  {onLogin , LoginSuccess, LoginError} from "./UserReducer"
import {UserReq} from '../axiosRequest'

export const login = async(dispatch,user ) =>{

    dispatch(onLogin());

    try{
        const res = await UserReq.post("auth/login",user);

        dispatch( LoginSuccess(res.data))
    }
    catch(err){

        dispatch(LoginError())
    }
}