import axios from "axios"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/UserConstants"

export const userLoginAction = (email,password) => async(dispatch) =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(`http://127.0.0.1:8000/api/auth/login/`,{email,password},config)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data.data})
        localStorage.setItem('userInfo',JSON.stringify(data))
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({type:USER_LOGIN_FAILED,
        payload:error.response && error.response.data.detail ? error.response.data.detail : error.detail})
    }
}

export const userLogout = () => async(dispatch) => {
        await localStorage.removeItem('userInfo')
        dispatch({type:USER_LOGOUT})
}