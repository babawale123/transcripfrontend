import axios from "axios"
import { GET_STUDENT_FAILED, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS, GET_TRANSCRIPT_FAILED, GET_TRANSCRIPT_REQUEST, GET_TRANSCRIPT_SUCCESS } from "../constants/transcriptConstants"

export const transcriptsAction = () => async(dispatch,getState) =>{
    try {
        dispatch({type:GET_TRANSCRIPT_REQUEST})
        const {userLogin:{userInfo}} = getState();
            const config = {
            headers:{
                Authorization:`token ${userInfo.token}`,
            },
        };
        const {data} = await axios.get(`http://127.0.0.1:8000/api/transcript/transcript/`,config)
        dispatch({type:GET_TRANSCRIPT_SUCCESS,payload:data})
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_TRANSCRIPT_FAILED,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.detail,
          });
    }
}

export const studentAction = () => async (dispatch,getState) => {
    try {
        dispatch({type:GET_STUDENT_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`token ${userInfo.token}`,
            }
        }
        const {data} = await axios.get(`http://127.0.0.1:8000/api/transcript/student/`,config)
        dispatch({type:GET_STUDENT_SUCCESS,payload:data});
        console.log(data);
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_STUDENT_FAILED,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.detail,
          });
    }
}